import React,{useState,useEffect} from "react";
import App from "../App";
import Node from "./Node";
import "./Pathfind.css";
const cols=15;
const rows=25;
const NODE_START_ROW=0;
const NODE_START_COL=0;
const NODE_END_ROW=rows-1;
const NODE_END_COL=cols-1;
const Pathfind=()=>{
    const [Grid,setGrid] = useState([]);
    useEffect( () => {
        initalizeGrid();
    }, []);
    const initalizeGrid=()=>{
        const grid=new Array(cols);
        for(let i=0;i<cols;i++)
        {
            grid[i]=new Array(rows);
        }
        createSpot(grid);
        setGrid(grid);
    };
    const createSpot= (grid) => {
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
        this.isStart=this.x==NODE_START_ROW && this.y==NODE_START_COL;
        this.isEnd=this.x==NODE_END_ROW && this.y==NODE_END_COL;
        this.g=0;
        this.f=0;
        this.h=0;
    }
    //GRID WITH NODE
    const gridwithNode=(
        <div>
        {Grid.map((row,rowIndex) => {
            return (
                <div key={rowIndex} className="rowWrapper">
                    {row.map((col,colIndex)=>{
                        const {isStart,isEnd}=col;
                        return <Node key={colIndex} isStart={isStart} isEnd={isEnd}></Node>;
                    })}
                </div>
            )
        })}
            </div>
    )
    // console.log(Grid);
    return (
        <div className="Wrapper">
            <h1>Pathfind Component</h1>
            {gridwithNode}
        </div>
    );
};
export default Pathfind;