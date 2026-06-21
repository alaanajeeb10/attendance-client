import {useMutation} from "@tanstack/react-query";
import {AddExit} from "./apiExit.js";

function useAddExit() {
    const {isLoading:isAdding, mutate:addExit} = useMutation({
        mutationFn: AddExit,
        onError: async (err) => { console.log("Exit Error:", err) },        onSuccess: ()=>{ alert("היציאה נשמרה בהצלחה") },
    });
    return {isAdding, addExit};
}
export {useAddExit};
