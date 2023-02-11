function TaskContext(props){
    return(
        <>
        {/* Cuando decimos que dentro de un componente van a ir mas componentes
            Podemos usar children
                Que es decir que dentro de ese componente iran mas componentes
        */}
            <h1>Component</h1>
            {props.children}
        </>
    );
}