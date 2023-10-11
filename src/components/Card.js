import "./card.css"
import Image from 'next/image'

export default function Card(props) {
    console.log("hello")
    return (
        <div className="card">
            <div className="card--header">
                <Image 
                    className="card--header--image" 
                    src={props.item.image} 
                    width={200}
                    height={200}
                    alt="Picture of the author"
                />
                <div className="card--header--content">
                    <h1>{props.item.name}</h1>
                    <p>phone: {props.item.phone}</p>
                    <p>email: {props.item.email}</p>
                    <p>gold: ¢{props.item.gold}</p>
                    <p>like: {props.item.likes}</p>
                </div>
            </div>
            <p className="card--bio">{props.item.bio}</p>
            <div className="card--buttons">
                <button 
                    className="card--buttons--yes" 
                    onClick={() => props.buttonHandler(props.item.id, 1)}>
                    Yes
                </button>
                <button 
                    className="card--buttons--no"
                    onClick={() => props.buttonHandler(props.item.id, -1)}>
                    No
                </button>
            </div>
        </div>
    )
}