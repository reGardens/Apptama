import LayoutBody from '@/components/layout/LayoutMain';
import packageJson from '../../../package.json'
import { useAuthStore } from '@/stores/useAuthStore';
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

export const Route = createFileRoute('/(auth)/login')({
    component: Auth,
})

function Auth() {
    const router = useRouter()
    const { username, password, showPassword, setUsername, setPassword, setShowPassword, login } = useAuthStore()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validUsers = [
            { u: 'ritakarina', p: '021096' },
            { u: 'rezabaguspratama', p: '030597' },
            { u: 'r', p: '1' },
        ];

        const isValid = validUsers.some(
            (user) => user.u === username && user.p === password
        );

        if (isValid) {
            login(username, password); // simpan ke Zustand + localStorage otomatis
            window.showToast('Login berhasil! Selamat datang', 'success');
            router.navigate({ to: '/note', replace: true });
        } else {
            window.showToast('Login gagal! Coba lagi', 'error');
        }
    }

    return (
        <LayoutBody>
            <div className="flex justify-center items-center h-screen">
                <div className="grid gap-8">
                    <div id="back-div" className="bg-gradient-to-r from-emerald-500 to-purple-400 rounded-[26px] m-4">
                        <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2 py-8">
                            <h1 className=" pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                                <div className="text-center text-xl">
                                    AppTama
                                </div>
                                Log in
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="username" className="mb-2  dark:text-gray-400 text-lg">Username</label>
                                    <input id="username" className="border p-3 dark:bg-gray-800 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full" type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} autoComplete='off' />
                                </div>
                                <div>
                                    <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                                    <div className="relative">
                                        <input id="password" className="border p-3 shadow-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full" type={showPassword ? "text" : "password"} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} autoComplete='off' />
                                        <button type="button" className='absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer opacity-75 bg-gray-600 rounded-lg p-1.5 outline-none' onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword) }}>
                                            <div className="relative w-5 h-5 flex items-center justify-center">
                                                <LuEye className={`absolute transition-all duration-300 ease-in-out text-white ${showPassword ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
                                                <LuEyeClosed className={`absolute transition-all duration-300 ease-in-out text-white ${showPassword ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                {/* <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                                    <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        Forget your password?
                                    </span>
                                </a> */}
                                <button className="bg-gradient-to-r dark:text-gray-600 from-emerald-500 to-purple-400 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-400 hover:to-emerald-500 transition duration-300 ease-in-out" type="submit">LOG IN</button>
                            </form>
                            {/* <div className="flex flex-col mt-4 items-center justify-center text-sm">
                                <h3 className="dark:text-gray-300">
                                    Don't have an account?
                                    <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                                        <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Sign Up</span>
                                    </a>
                                </h3>
                            </div> */}
                            {/* <div id="third-party-auth" className="flex items-center justify-center mt-5 flex-wrap">
                                <button href="#" className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                    <img className="max-w-[25px]" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
                                </button>
                                <button href="#" className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                    <img className="max-w-[25px]" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="Linkedin" />
                                </button>
                                <button href="#" className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                    <img className="max-w-[25px] filter dark:invert" src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="Github" />
                                </button>
                                <button href="#" className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                    <img className="max-w-[25px]" src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/" alt="Facebook" />
                                </button>
                                <button href="#" className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                    <img className="max-w-[25px]" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" alt="twitter" />
                                </button>
                                <button href="#" className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                    <img className="max-w-[25px]" src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/" alt="apple" />
                                </button>
                            </div> */}

                            {/* <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                                <p className="cursor-default">
                                    By signing in, you agree to our
                                    <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                                        <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                            Terms
                                        </span>
                                    </a>
                                    and
                                    <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                                        <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                            Privacy Policy
                                        </span>
                                    </a>
                                </p>
                            </div> */}
                        </div>
                    </div>
                    <div className="text-center text-xs">v{packageJson.version}</div>
                </div>
            </div>
        </LayoutBody>

    )
}