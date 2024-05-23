type Props={
    name:string;
    age:number;
}
export const Header = ({name, age}: Props) => {
    return(
        <footer>
            <h1>Olá {name} tudo bem ? {age} anos. </h1>
        </footer>
    )
}