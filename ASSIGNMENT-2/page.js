"use client"
import ButtonComponet from './Componet/ButtonComponet';
import{useState} from "react";
import "./Card.css";
export default function Home(){
  const[label,setlabel]=useState("continue")
  const  clickme =()=>{
    alert("hello");
};
return(
  <div>
    <ButtonComponet
    img ="https://images.tv9hindi.com/wp-content/uploads/2021/10/KTM-RC-200-price-in-india.jpg"
    title="hello"
    description="hello this is a Ktm bike."
    />
        <ButtonComponet
    img ="https://bikeindia.in/wp-content/uploads/2023/07/HD-X440-003.jpg"
    title="hello"
    description=" This is Harley-Davidson
    The Harley-Davidson X440 is the first product to come out of the joint venture between Hero MotoCorp and Harley-Davidson.."
    />
        <ButtonComponet
    img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXueInFor-oBlOnTR3Qb1rMHJsC2u3FOn2VA&usqp=CAU.jpg"
    title="hello"
    description="hello this is a splender,it is good millage bike in india"
    />    <ButtonComponet
    img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZzzav_36ZbMSrfR8hvFTpiEso2J5Kms3EA&usqp=CAU.jpg"
    title="hello"
    description="hello this is a passion  pro,it is a one of the best bike"
    />
    </div>
  )
}
