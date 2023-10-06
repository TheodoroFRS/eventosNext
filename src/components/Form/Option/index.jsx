
import styles from "./styles.module.css"


export default function Option({value,children}) {

  
    return (
        <>   
            <option value={value}>{children}</option>

        </>

    )
}
