import React,{useState,useEffect} from "react";
import App from "../App";
const cols=5;
const rows=5;
const Pathfind=()=>{
    const{Grid,setGrid}=useState([]);
    const initiaize=()=>{
        const grid=new Array(cols);
        for(let i=0;i<cols;i++)
        {
            grid[i]=new Array(rows);
        }
        craeteSpot(grid);
    };
    const craeteSpot=(grid)=>{
        for(let i=0;i<cols;i++)
        {
            for(let j=0;j<rows;j++)
            {
                grid[i][j]=new Spot(i,j);
            }
        }
    };
    function Spot(i,j)
    {
        this.x=i;
        this.y=j;
        this.g=0;
        this.f=0;
        this.h=0;
    }
    return (
        <div>
            <h1>Pathfind Component</h1>
            </div>
    );
};
export default Pathfind;