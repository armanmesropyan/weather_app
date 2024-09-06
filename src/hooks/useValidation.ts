const useValidations = () => {
    const isEmail = (email: string) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(String(email).toLowerCase());
    };
    const isEmpty = (data: string | number): boolean => {
        if (typeof data === "number") {
            return !data?.toString()?.trim().length;
        } else return !data?.trim().length;
    };


    const isNull = (data: string | number | null | undefined) => {
        return !data;
    };



    return {
        isEmail,
        isEmpty,
        isNull,
    };
};
export default useValidations;
