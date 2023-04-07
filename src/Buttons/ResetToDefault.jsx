import "/src/css/print.css"

export default function resetToDefault() {

    const resetToDefault = () => {
       if ( confirm("You're about to lose all data including uploaded icons and images. Are you sure you want to reset?")) {
        localStorage.removeItem("cvData")
        window.location.reload();
       }
    }
    
    return (
        <button className='reset-to-default' onClick={resetToDefault}> Reset </button>
    )
}