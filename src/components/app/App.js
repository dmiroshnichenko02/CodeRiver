import RiverNav from "../riverNav/RiverNav";
import RiverWelcome from "../riverWecome/RiverWelcome";
import RiverMain from "../riverMain/RiverMain";

function App() {
    return (
        <>
            <header>
                <RiverNav />
                <RiverWelcome />
            </header>
            <main>
                <RiverMain />
            </main>
        </>
    );
}

export default App;
