import { CursorChatProps, CursorMode } from '@/types/type'
import React from 'react'

const CursorChat = ( { cursor, cursorState, updateMyPresence, setCursorState }: CursorChatProps) => {
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        updateMyPresence({message : e.target.value})
        setCursorState({ mode : CursorMode.Chat, previousMessage: null, message: e.target.value })
    }
    const handleKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter'){
            setCursorState({ mode : CursorMode.Chat, previousMessage: cursorState.message , message: '' })
        }else if (e.key == 'Esc' ){
            setCursorState({ mode : CursorMode.Hidden })
        }
    }
  return (
    <>
        <div className="absolute top-0 left-0" style={{ transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`}} >
            
            {cursorState.mode === CursorMode.Chat && (
                <>
                <div className="absolute left-2 top-5 bg-slate-200 border border-slate-500 px-4 py-2 text-sm leading-relaxed text-slate-500 rounded-[10px]" onKeyUp={(e)=> e.stopPropagation()}>
                    {/**
                     * if there is a previous message, show it above the input
                     *
                     * We're doing this because when user press enter, we want to
                     * show the previous message at top and the input at bottom
                     */}

                    {cursorState.previousMessage &&
                     <div>{cursorState.previousMessage}</div>
                    }
                    <input className="z-10 w-60 border-none bg-transparent text-black placeholder-slate-800 outline-none" maxLength={50} autoFocus={true} onChange={handleChange} onKeyDown={handleKeyDown} placeholder={cursorState.previousMessage ? '' : 'Type a comment.'}/>
                </div>
                </>
            )}
        </div>
    </>
  )
}

export default CursorChat