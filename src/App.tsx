import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import { auth } from "./lib/firebase";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useAppDispatch } from "./redux/hook";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                dispatch(setUser(user.email!));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
            }
        });
    }, [dispatch]);

    return (
        <>
            <MainLayout />
            <Toaster />
        </>
    );
}

export default App;
