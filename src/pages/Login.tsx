import { Button, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/token/actions";
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  async function handleSubmit(values: any) {
    await dispatch(login({ ...values, accessLevel: 1 }));
    navigate("/home")
  }

  return (
    <div className="App">
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <Container style={{ maxWidth: "400px" }}>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                className="outlined-basic"
                label="email"
                variant="outlined"
                style={{ marginBottom: "12px" }}
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              <TextField
                className="outlined-basic"
                label="Nome"
                variant="outlined"
                style={{ marginBottom: "12px" }}
                value={values.name}
                onChange={(e) => setFieldValue("name", e.target.value)}
              />
              <TextField
                className="outlined-basic"
                label="Senha"
                variant="outlined"
                type="password"
                style={{ marginBottom: "12px" }}
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
              />
              <Button variant="contained" type="submit">
                ENTRAR
              </Button>
            </form>
          </Container>
        )}
      </Formik>
    </div>
  );
}

export default Login;
