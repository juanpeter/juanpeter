import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import jsonData from '../../updates.json'

export const MainPage = () =>{

    const pageVersion = jsonData.updates.at(-1);

    return (
        <>
        <Header />
        <main className= {
            (pageVersion?.classes) 
            ? pageVersion?.classes.bg
            : 'bg-white dark:bg-gray-800 content-center'
           
        }
        >
            <div className='text-center text-gray-500 dark:text-gray-400'>
                <h1 className='text-6xl font-extrabold tracking-wide mb-6'>
                    {pageVersion?.title}
                </h1>

                <p>{pageVersion?.subtext}</p>
            </div>
        </main>
        <Footer />
        </>
    )
}

