import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    error: {
        color: "red"
    },
 
    hasError: {
        borderColor: "red"
    }
}));


export const Textarea = ({input, meta, ...props}) => {
    let classes = useStyles();
    let hasError = meta.touched && meta.error;

    return (
        <div>
            <div>
                <textarea {...input} {...props} className={hasError ? classes.hasError : ""}/>
            </div>
            { hasError && 
              <span className={classes.error}>{meta.error}</span>
            }
        </div>
    )
}