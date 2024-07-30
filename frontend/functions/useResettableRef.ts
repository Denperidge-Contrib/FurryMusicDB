import {ref, toValue} from "vue";
import lodash from "lodash";
const {cloneDeep} = lodash;

export function useResettableRef(original) {
    const record = ref(cloneDeep(toValue(original)));

    const reset = () => {
        record.value = cloneDeep(toValue(original));
    }

    return {record, reset};
}
