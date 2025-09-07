// how react works

// function customRender(reactElement, container){
//     const domElemnt = document.createElement(reactElement.type)
//     domElemnt.innerHTML = reactElement.Children
//     domElemnt.setAttribute('href', reactElement.props.href)
//     domElemnt.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElemnt)
// }

//better way
function customRender(reactElement, container){
    const domElemnt = document.createElement(reactElement.type)
    domElemnt.innerHTML = reactElement.Children
    
    for(const prop in reactElement.props){
        if(prop === 'Children') continue
        domElemnt.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElemnt)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'http.//google.com',
        target: '_blank'
    },
    Children: "this was a google link"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)