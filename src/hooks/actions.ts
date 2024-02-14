import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { spaceflightActions } from "../store/spaceflightnews/spaceflightnews.slice"

const actions = {
    ...spaceflightActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}