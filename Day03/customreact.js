// In this video we are creating our own react it is not much powerful as that of react(it contain verious algo. for optimization) but we are creating the bare minimumum basic version, for concept clearity react.


function customRender(reactElement,mainContainer){

    // const domElemnt=document.createElement(reactElement.type)


    // domElemnt.innerHTML=reactElement.children;
    // domElemnt.setAttribute('href',reactElement.props.href)
    // domElemnt.setAttribute('target',reactElement.props.target)

    // mainContainer.appendChild(domElemnt)

    const domElemnt=document.createElement(reactElement.type);// we are create element through react element.
    domElemnt.innerHTML=reactElement.children;

    for(const prop in reactElement.props){

        if(prop==='children'){
            continue;
        }
        domElemnt.setAttribute(prop,reactElement.props[prop]);  // key vallue  hi to haa
    }

    mainContainer.appendChild(domElemnt);
}






// merko isko render karna ha , render karna kaya ha aak mera pass element hota ha, suppose merko a tag ko render karna ha , Behind the scene a tag kasa diya jata ha wo isi thara sa diya jata ha jasa function jo return karta wo react kasa dhek ta haa.



const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to Visit google'
}// Ya hamna aak element banaya, kuki ya kam react ka hota ha under the hood. 
// react compile kaa Baad kasa Dhek ta haa-> react ussa aak tree bana ki kosish karta ha 
// har aak elemnt issi thara sa likhna padgaa.

//end of the day react ma isi sa hi evaluate hota haa.(react ka andhar issi thara sa kamm hota haa)







const mainContainer=document.querySelector('#root')


// aak method ho jo iss element ko render ka daa. iss element ko add kar da root ka andhar.

customRender(reactElement,mainContainer);




