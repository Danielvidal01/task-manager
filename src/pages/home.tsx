import { DefaultRootState, useSelector } from "react-redux";

function Home() {
    const user = useSelector((state:any)=> state.user)
    return(
        <p>{JSON.stringify(user)}</p>
    )
}
export default Home;