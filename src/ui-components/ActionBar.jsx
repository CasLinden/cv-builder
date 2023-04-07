import PrintButton from '/src/buttons/PrintButton';
import ResetToDefault from '../buttons/ResetToDefault';
import logo from '/src/assets/logo.png';
import "/src/css/action-bar.css"

export default function ActionBar() {

    return (
        <div className="action-bar">
        <img className='logo' src={logo} alt="logo" />
        <PrintButton></PrintButton>
        <ResetToDefault></ResetToDefault>
        </div>
    );
}