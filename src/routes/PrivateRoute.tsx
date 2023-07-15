import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { useAppSelector } from "../redux/hook";

interface IProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
    const { pathname } = useLocation();

    const { user, isLoading } = useAppSelector((state) => state.user);

    if (isLoading) {
        return <Loading />;
    }

    if (!user.email) {
        return <Navigate to="/login" state={{ from: pathname }} replace />;
    }

    return <>{children}</>;
}
