import React from 'react';
import './Avatar.css';
import user from '../../user.js'
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


const Avatar = ({className}) => {
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
    let avatarSrc = avatars.filter(function(elem) {
        return elem[0] === user.avatar;
    });
    avatarSrc = avatarSrc[0][1][avatarSrc[0][0]]

 
    return (<div id='img-avatar' className={className}>
        <img className="avatar" src={avatarSrc} alt='avatar' title='user avatar'/>
    </div>)
};

export default Avatar;