import {useMutation} from "@tanstack/react-query";
import {AddEntry} from "./apiEntry.js";

function useAddEntry() {
    const {isLoading:isAdding, mutate:addEntry} = useMutation({
        mutationFn: AddEntry,
        onError: async (err) => { console.log("err", err) },
        onSuccess: ()=>{ alert("הכניסה נשמרה בהצלחה") },
    });
    return {isAdding, addEntry};
}
export {useAddEntry};
