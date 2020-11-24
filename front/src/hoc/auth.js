import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, onlyGuest, onlyAdmin = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        const { isAuth } = res.payload;
        const { isAdmin } = res.payload;
        console.log(isAuth);
        console.log(isAdmin);
        if (isAuth && onlyGuest) {
          return props.history.push("/");
        }
        if (isAdmin & onlyAdmin) {
          return props.history.push("/");
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
