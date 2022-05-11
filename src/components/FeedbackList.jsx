import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
// import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0){
        return <p>No Feedback yet</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
        {feedback.map((item) => (
            <motion.div 
                key = {item.id}
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                exit = {{opacity: 0}}

            >
                <FeedbackItem key={item.id} item = {item}
                
                ></FeedbackItem>
            </motion.div>
        ))}
            </AnimatePresence>
        </div>)
// Version without animation
//   return (<div className='feedback-list'>
//         {feedback.map((item) => <FeedbackItem key={item.id} item = {item}
//         handleDelete = {handleDelete}
//         ></FeedbackItem>)}</div>)
    // return <div>List</div>
}
// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList