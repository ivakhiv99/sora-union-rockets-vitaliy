
const useDebounse = (func: Function, timeout = 200) => {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: unknown[]) => {
        console.log('clearing timeout')
        clearTimeout(timer);
        console.log('setting timeout')
        timer = setTimeout(
            () => {
                func.apply(this, args); 
            }, timeout
        )
    } 
};  

export default useDebounse;