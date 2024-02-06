"use client";

import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";

import { useMutation, useRedo, useStorage, useUndo } from "@/liveblocks.config";
import {
  handleCanvaseMouseMove,
  handleCanvasMouseDown,
  handleCanvasMouseUp,
  handleCanvasObjectModified,
  handleCanvasObjectMoving,
  handleCanvasObjectScaling,
  handleCanvasSelectionCreated,
  handleCanvasZoom,
  handlePathCreated,
  handleResize,
  initializeFabric,
  renderCanvas,
} from "@/lib/canvas";
import { handleDelete, handleKeyDown } from "@/lib/key-events";
import  LeftSidebar  from "@/components/figma/LeftSidebar";
import  RightSidebar  from "@/components/figma/RightSidebar";
import  Live  from "@/components/figma/live";
import { handleImageUpload } from "@/lib/shapes";
import { defaultNavElement } from "@/constants";
import { ActiveElement, Attributes } from "@/types/type";

export default function Page() {
  const canvasRef= useRef<HTMLCanvasElement>(null)
  const fabricRef = useRef<fabric.Canvas | null>(null)
  const isDrawing = useRef(false)
  const shapeRef = useRef<fabric.Object | null>(null)
  const selectedShapeRef = useRef<string | null>(null)
  


  // useEffect(() => {
  //   const canvas = initializeFabric({canvasRef, fabricRef})

  //   canvas.on("mouse:down", (options) => {
  //     handleCanvasMouseDown({
  //       options,
  //       canvas,
  //       selectedShapeRef,
  //       isDrawing,
  //       shapeRef,
  //     });
  //   });

  //   window.addEventListener("resize", () => {
  //     handleResize({ canvas: fabricRef.current })
  //   });
  
  // }, [])
  

  return (
        <main className="h-screen overflow-hidden ">
        {/* <Navbar/> */}
          <section className="h-full flex flex-row">
            <LeftSidebar/>
            <Live canvasRef={canvasRef}/>
            <RightSidebar/>
          </section>
        </main>

  );
}