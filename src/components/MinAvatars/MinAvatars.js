import React from 'react'
import './MinAvatars.css'
// Avatars
import anubis from "../../img_avatars/anubis.png"
import cat from "../../img_avatars/cat.png"
import eye from "../../img_avatars/eye.png"
import fish from "../../img_avatars/fish.png"
import homer from "../../img_avatars/homer.png"
import jake from "../../img_avatars/jake.png"
import octopus from "../../img_avatars/octopus.png"
import penguin from "../../img_avatars/penguin.png"
import totem from "../../img_avatars/totem.png"
import unicellular from "../../img_avatars/unicellular.png"
import unicorn from "../../img_avatars/unicorn.png"
import vegetable from "../../img_avatars/vegetable.png"

const avatars = [
    ["anubis",      {anubis}],
    ["cat",         {cat}],
    ["eye",         {eye}],
    ["fish",        {fish}],
    ["homer",       {homer}],
    ["jake",        {jake}],
    ["octopus",     {octopus}],
    ["penguin",     {penguin}],
    ["totem",       {totem}],
    ["unicellular", {unicellular}],
    ["unicorn",     {unicorn}],
    ["vegetable",   {vegetable}],
]

const MinAvatars = ({user, changeValueUserAva}) => {
   // <div className='ava'key={'ava_'+index+'_n_'+ava[0]} style = {{'backgroundColor': ava[1]}}
   //>{index}</div>
    const minAvatars = avatars.map((elem, i) => {
        const avatarSrc = elem[1][elem[0]]
        
        const classes = (elem[0] === user.avatar)? "ava userAva": "ava"
        console.log(elem[0], classes)
        return <img key={'ava_'+i} className={classes} src={avatarSrc} alt={elem[0]} onClick={() => changeValueUserAva(elem[0])}/>
        
    })

    console.log(minAvatars)

    return (
        <div className={'avatars'}>
            {minAvatars}
        </div>
    )
}

export default MinAvatars