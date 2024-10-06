import { InputLabel, CheckBoxLabel, ButtonLogin } from "../../components"

export const Login = ({ login_register, setLoginRegister }) => {
    return (
        <main className="w-screen min-h-screen bg-gray-100 flex justify-center items-center">
            
            <form className="bg-white w-full h-screen sm:h-auto sm:w-2/3 lg:w-1/3 text-gray-900 rounded-md shadow-md flex flex-col">
                <section className="flex flex-col justify-center items-center w-full h-40">
                    <img className="w-20 h-20" src="TodoStockLogo.webp" alt="TodoStockLogo" />
                    <h1 className="font-bold text-2xl flex gap-2">
                        Iniciar sesión en
                        <strong>
                            <span className="text-blue-800">Todo</span>
                            <span className="text-green-800">Stock</span>
                        </strong>
                    </h1>
                </section>
                <hr />
                <section className="w-full p-5 flex flex-col gap-3 flex-1">
                    <InputLabel label="Usuario" type="text" required={true} />
                    <InputLabel label="Contraseña" type="password" required={true} />
                    <CheckBoxLabel label="Recordarme" />
                    <div className="sm:pt-4 mt-auto">
                        <ButtonLogin text="Iniciar Sesión" />
                    </div>
                </section>
            </form>

        </main>
    )
}
