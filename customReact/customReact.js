function customRender(reactElement, container){
    //step1: create the react element in the actual DOM
    //step2: inject the created element in the container
   
    /* const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement);

}

const reactElement = {
    //how react sees the elements to render
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },

    children: 'click me to visit google'
}

const root =  document.getElementById('root');

customRender(reactElement,root);