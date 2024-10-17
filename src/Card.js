import profilepic from './image/cardimage.jpg';



function Card() {
    return(
        <div className="card">
            <img className='image' src={profilepic} alt="card image"></img>
            <h2 className='title'>Shawarma City</h2>
            <p className='text'>ბათუმში უგემრიელეს შაურმას მიირთმევთ ჩვენთან.
                <br></br><br></br> <i>"თუ შეგაწუხა კუჭის ხმაურმა მაშინ, მიირთვი ჩვენი შაურმა"</i>.<br></br><br></br>
                <b>მის: ი. ჭავჭავაძის 49.(26 მაისის და ჭავჭავაძის კვეთა)</b> </p>

        </div>
    )

}


export default Card;