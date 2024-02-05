"use"
import React, { useCallback, useEffect, useState } from 'react'
import LiveCursors from './cursor/LiveCursors'
import { useBroadcastEvent, useEventListener, useMyPresence, useOthers } from '@/liveblocks.config'
import CursorChat from './cursor/CursorChat'
import { CursorMode, CursorState, Reaction, ReactionEvent } from '@/types/type'
import ReactionSelector from './reaction/ReactionButton'
import FlyingReaction from './reaction/FlyingReaction'
import useInterval from '@/hooks/useInterval'

type Props = {
    canvasRef : React.MutableRefObject<HTMLCanvasElement | null>
}

const Live = ({ canvasRef }: Props) => {
    const others = useOthers()
    const [ { cursor }, updateMyPresence ] = useMyPresence() as any
    const [cursorState, setCursorState] = useState<CursorState>({ mode: CursorMode.Hidden })
    const [reaction, setReaction] = useState<Reaction[]>([])
    const broadcast = useBroadcastEvent();

    const setReactions = useCallback((reaction: string) => {
        setCursorState({ mode: CursorMode.Reaction, reaction, isPressed: false });
    }, []);

    // clear reactions saved in state 
    useInterval(()=>{
            setReaction((reactions)=> reactions.filter((r)=> r.timestamp > Date.now() - 4000))
    }, 1000)


    useInterval(()=>{
        if(cursorState.mode === CursorMode.Reaction && cursorState.isPressed && cursor){
            setReaction((reactions)=> reactions.concat([{
                point: {x: cursor.x, y: cursor.y},
                value: cursorState.reaction,
                timestamp: Date.now()
            }]));
            broadcast({
                x: cursor.x,
                y: cursor.y,
                value: cursorState.reaction,
            });
        }
    }, 100)

    useEventListener((eventData)=>{
        const event = eventData.event as ReactionEvent;
        setReaction((reactions)=>reactions.concat([{
            point:{ x: event.x, y : event.y},
            value: event.value,
            timestamp: Date.now()
        }]))
    })

    const handlePointerMove = useCallback((event: React.PointerEvent)=>{
        
        event.preventDefault()

        if(cursor == null || cursorState.mode !== CursorMode.ReactionSelector ){
            // this is used to substract position of the cursor relative to the window not Subtracting from cursor width
            const x = event.clientX - event.currentTarget.getBoundingClientRect().x
            const y = event.clientY - event.currentTarget.getBoundingClientRect().y
    
            updateMyPresence({cursor:{ x, y }})
        }
    },[])

    const handlePointerLeave = useCallback((event: React.PointerEvent)=>{
        setCursorState({ mode : CursorMode.Hidden })
        updateMyPresence({cursor: null , message: null})
    },[])

    const handlePointerDown = useCallback((event: React.PointerEvent)=>{
        
        // this is used to substract position of the cursor relative to the window not Subtracting from cursor width
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y

        updateMyPresence({cursor:{ x, y }})
        setCursorState((state: CursorState) =>
            cursorState.mode === CursorMode.Reaction ? { ...state, isPressed: true } : state
        );
    },[cursorState.mode, setCursorState])

    const handlePointerUp = useCallback(() => {
        setCursorState((state: CursorState) =>
          cursorState.mode === CursorMode.Reaction ? { ...state, isPressed: false } : state
        );
    }, [cursorState.mode, setCursorState]);


    useEffect(() => {
      
        const onKeyUp = (e: KeyboardEvent) =>{
            if(e.key === '/'){
                setCursorState({
                    mode : CursorMode.Chat,
                    previousMessage: null,
                    message :'',
                })
            }else if( e.key === 'Escape' ){
                updateMyPresence({ message:'' })
                setCursorState({ mode : CursorMode.Hidden})
            }else if ( e.key === 'e'){
                setCursorState({
                    mode : CursorMode.ReactionSelector
                })
            }
        }

        const onKeyDown = (e: KeyboardEvent) =>{
            if(e.key === '/'){
                e.preventDefault()
            }
        }

        window.addEventListener('keyup',onKeyUp);
        window.addEventListener('keydown',onKeyDown);
        
        return () => {
            window.addEventListener('keyup',onKeyUp);
            window.addEventListener('keydown',onKeyDown);
        }
        
    }, [updateMyPresence])
    
     

  return (
    <div 
        id='canvas'
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className='h-[100vh] w-full  flex justify-center items-center '
    >
        <LiveCursors others={others}/>

        {cursor && (
            <CursorChat 
                cursor={cursor}
                cursorState={cursorState}
                setCursorState={setCursorState}
                updateMyPresence={updateMyPresence}
            />
        )} 

         {/* If cursor is in reaction selector mode, show the reaction selector */}
         {cursorState.mode === CursorMode.ReactionSelector && (
          <ReactionSelector
            setReaction={setReactions}
          />
        )}


        {reaction.map((r)=>(
            <FlyingReaction
                key={r.timestamp}
                y={r.point.y}
                x={r.point.x}
                timestamp={r.timestamp}
                value={r.value}
            />
        ))}

        <canvas ref={canvasRef} />
    </div>
  )
}

export default Live