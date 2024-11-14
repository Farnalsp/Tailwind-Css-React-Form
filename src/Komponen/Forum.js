import React from "react";
export default function Forum() {
    return (
        <div className="bg-blue px-10 py-20 rounded-3xl border-2 border-gray-500">
            <h1 className="text-3xl font-semibold text-center"> Selamat Datang</h1>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Email </label>
                    <input 
                    className="w-full border-2 border-gray-400 rounded-xl p-4 mt-1 bg-transparent hover:border-blue-900 focus:border-blue-900 focus:outline-none"
                    placeholder="Masukkan Email Anda"
                    />
                </div>
                <div>
                    <label className="text-lg font-medium">Password </label>
                    <input 
                    className="w-full border-2 border-gray-400 rounded-xl p-4 mt-1 bg-transparent cursor-pointer hover:border-blue-900 focus:border-blue-900 focus:outline-none"
                    placeholder="Masukkan Password Anda"
                    type="password"
                    />
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <input 
                        type="checkbox"
                        id="remember"
                        />
                        <label className="ml-2 font-medium text-base" for="remember">Ingatkan saya</label>
                    </div>
                    <button className="font-medium text-base text-blue-500">Lupa Password</button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button className='active:scale-[.98] active:duration-75 hover:scale-1[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-600 text-white text-lg font-bold hover:bg-blue-900'>Login</button>
                    <button className="flex rounded-xl py-3 border-2 border-gray-500 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-1[1.01] ease-in-out transition-all"> Sign in with Google</button>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">Tidak memiliki akun?</p>
                    <button className="text-blue-500 text-base font-medium ml-2">Buat akun</button>
                </div>
            </div>
        </div>
    )
}