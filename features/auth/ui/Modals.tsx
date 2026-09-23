"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi, verifyOtp } from "@/features/auth/api/authApi"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import google from "@/features/auth/assets/google.svg"
import cencel from "@/features/auth/assets/cencel.svg"
import OtpInput from 'react-otp-input';
import {
  ModalsProps,
  registerPhone,
  verifyRequest,
  registerRequest,
  loginRequest,
  PasswordResetRequest,
  passwordResetVerify,
  newPass,
} from "@/features/auth/model/types";
import {
  loginApi,
  passwordReset,
  resetPasswordVerify,
  newPassword,
  registerInfo,

} from "@/features/auth/api/authApi";






export function Modals({ setShowModal, onAuthSuccess }: ModalsProps) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [modal, setmodal] = useState("login")
  const [isChecked, setIsChecked] = useState(false)
  const [otpError, setOtpError] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [checkError, setCheckError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    if (!phone) {
      setPhoneError("Введите номер телефона полностью");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (!isChecked) {
      setCheckError("Примите политику конфиденциальности");
      hasError = true;
    } else {
      setCheckError("");
    }

    if (hasError) {
      return;
    }

    const data: registerPhone = {
      phone_number: `+${phone}`,
      method: "whatsapp",
      type: "register",
    };

    try {
      const ourApi = await authApi(data);
      console.log(ourApi);
      setmodal("register-otp");
    } catch (error) {
      console.error(error);
      alert("У вас уже есть аккаунт")
      setmodal("login")
    }
  };
  const handleSubmitVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: verifyRequest = {
      phone_number: `+${phone}`,
      otp: `${otp}`
    }
    try {
      const ourVerify = await verifyOtp(data)
      console.log("Verify register:", ourVerify);
      setmodal("register-info")
    }

    catch (error) {
      console.error(error);
      setOtpError(true);
    }
  }
  const handleRerister = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: registerRequest = {
      phone_number: `+${phone}`,
      password: password,
      email: email,
      full_name: name

    }
    try {
      const info = await registerInfo(data)
      console.log("Register Request:", info);
      localStorage.setItem("token", info.token)
      const token = localStorage.getItem("token");
      console.log("Manovi token", token);
      setmodal("login")
      setShowModal(false);
      onAuthSuccess?.(info.token)
    }
    catch (error) {
      console.log(error);
    }
  }
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: loginRequest = {
      phone_number: `+${phone}`,
      password: password,
    }
    try {
      const login = await loginApi(data)
      console.log("Login:", login);
      console.log("Token:", login.token_key);
      localStorage.setItem("token", login.token_key);
      setShowModal(false)
      router.push("/profile")
    }
    catch (error) {
      console.log(error);
    }
  }
  const ResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: PasswordResetRequest = {
      method: "whatsapp",
      phone_number: `+${phone}`,
    }
    try {
      const resetPassword = await passwordReset(data)
      console.log("Reset Password", resetPassword);
      setmodal("resetpassword-otp")
    }
    catch (error) {
      console.log(error);

    }
  }
  const resetPassVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: passwordResetVerify = {
      phone_number: `+${phone}`,
      otp: otp
    }
    try {
      const passReset = await resetPasswordVerify(data)
      console.log("Reset Verify Password:", passReset);
      setmodal("new-password");
    } catch (error) {
      console.log(error);
    }
  }
  const passComplete = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: newPass = {

      phone_number: `+${phone}`,
      otp: otp,
      new_password: password
    }
    try {
      const nPass = await newPassword(data)
      console.log("New Password:", nPass);


    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="backdrop-blur-[2px] inset-0 bg-black/10 fixed z-50 flex items-center justify-center">
      {modal === "login" && (<div className="bg-white p-5  flex flex-col  text-center  gap-4 rounded-2xl ">
        <Image src={cencel} alt="cencel" className="self-end w-6  cursor-pointer" onClick={() => setShowModal(false)} />
        <h2 className="text-4xl">Добро пожаловать</h2>
        <p className="text-gray-400">Введите данные для входа в аккаунт</p>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <PhoneInput
            country="kg"
            value={phone}
            placeholder="Telefon raqam"
            inputClass="!w-90  !h-12 !rounded-xl !border-none  !bg-gray-50 !text-base"
            buttonClass="!border-none !bg-gray-50 !rounded-l-xl"
          />
          <input type="password" placeholder="your password" className="bg-gray-50 p-2.5 rounded-xl outline-none" onChange={(e) => setPassword(e.target.value)} />
          <p className="cursor-pointer underline text-gray-400 flex justify-end" onClick={() => setmodal("reset-password")}>Забыли пароль?</p>
          <button type="submit" className="bg-[#1D75DD] rounded-2xl p-3 text-white">Войти</button>
          <div className="flex justify-between"><p className="text-[13px]">У вас еще нет аккаунта</p><p className="text-[13px] cursor-pointer" onClick={() => setmodal("register-phone")}>Создать аккаунт</p></div>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-gray-500">или</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          <button className="p-3 bg-gray-50 rounded-xl flex items-center justify-center gap-3"><Image src={google} alt="Google" />  Войти с  Google</button>
        </form>
      </div>)}
      {modal === "reset-password" &&
        (<div className="bg-white p-10  flex flex-col items-center text-center gap-4 rounded-2xl ">
          <Image src={cencel} alt="cencel" className="self-end w-6  cursor-pointer" onClick={() => setShowModal(false)} />
          <h2 className="text-3xl">Забыли пароль?</h2>
          <p className="text-gray-400">Введите номер, указанный при регистрации, и мы отправим вам код для сброса. </p>
          <form className="flex flex-col gap-4" onSubmit={ResetPassword}>
            <PhoneInput
              country="kg"
              value={phone}
              onChange={(e) => setPhone(e)}
              placeholder="Telefon raqam"
              inputClass="!w-90  !h-12 !rounded-xl !border-none  !bg-gray-50 !text-base"
              buttonClass="!border-none !bg-gray-50 !rounded-l-xl"
            />
            <button type="submit" className="bg-[#1D75DD] rounded-2xl p-3 text-white"  >Получить код</button>
            <button type="button" className="bg-gray-100 rounded-2xl p-3 text-[#1D75DD] cursor-pointer" onClick={() => setmodal("login")}>Вернуться </button>
          </form>
        </div>)
      }
      {modal === "resetpassword-otp" &&
        (<div className="bg-white p-10  flex flex-col items-center text-center gap-4 rounded-2xl ">
          <Image src={cencel} alt="cencel" className="self-end w-6  cursor-pointer" onClick={() => setShowModal(false)} />
          <h2 className="text-3xl">Введите код</h2>
          <p className="text-gray-400">Мы отправили СМС с 4-значным кодом на номер {phone} </p>
          <form className="flex flex-col gap-4" onSubmit={resetPassVerify}>
            <OtpInput
              value={otp}
              onChange={(value) => {
                setOtp(value);
                setOtpError(false);
              }}
              numInputs={4}
              inputStyle={{
                width: '80px',
                height: '64px',
                fontSize: '24px',
                textAlign: 'center',
                borderRadius: '16px',
                backgroundColor: '#f9fafb',
                border: '1px solid transparent',
                outline: 'none',

                margin: '0 8px',
              }}
              shouldAutoFocus
              inputType="tel"
              renderInput={(props) => (
                <input {...props} className="otp-input " style={{
                  ...props.style,
                  border: otpError
                    ? '1px solid red'
                    : '1px solid transparent',
                }} />
              )}
            />
            <button type="submit" className={otpError ? "border border-red-500 rounded-2xl p-3  text-red-500 bg-gray-50" : "bg-[#1D75DD] rounded-2xl p-3 text-white"}  >Подтвердить</button>
            <button type="button" className="bg-gray-50 rounded-2xl p-3 text-[#1D75DD] cursor-pointer" onClick={ResetPassword}>Повторно отправить код </button>
          </form>
        </div>)}
      {modal === "new-password" && (
        <div className="bg-white p-10 flex flex-col items-center text-center gap-4 rounded-2xl">
          <h2>Новый пароль</h2>

          <form className="flex flex-col gap-4" onSubmit={passComplete}>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 p-2.5 rounded-xl outline-none"
            />

            <input
              type="password"
              placeholder="Новый пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 p-2.5 rounded-xl outline-none"
            />

            <input
              type="password"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-50 p-2.5 rounded-xl outline-none"
            />

            <button
              type="submit"
              className="bg-[#1D75DD] rounded-2xl p-3 text-white"
            >
              Изменить пароль
            </button>

          </form>
        </div>
      )}
      {modal === "register-phone" &&
        (<div className="bg-white p-5  flex flex-col  text-center  gap-4 rounded-2xl w-110">
          <Image src={cencel} alt="cencel" className="self-end w-6  cursor-pointer" onClick={() => setShowModal(false)} />
          <h2 className="text-3xl">Добро пожаловать</h2>
          <p className="text-gray-400">Зарегистрируйтесь, чтобы использовать все функции сайта
            Напишите свой Whats app номер.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <PhoneInput
              country="kg"
              value={phone}
              onChange={(e) => {
                setPhone(e)
                setPhoneError('')
              }}
              placeholder="Telefon raqam"
              inputClass="!w-90  !h-12 !rounded-xl !border-none  !bg-gray-50 !text-base"
              buttonClass="!border-none !bg-gray-50 !rounded-l-xl"
            />
            {phoneError && (
              <p className="text-red-500 text-sm self-start">
                {phoneError}
              </p>
            )}
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={isChecked} onChange={(e) => {
                setIsChecked(e.target.checked)
                setCheckError('')
              }
              } />
              <span className="text-[#1D75DD]">Политика конфиденциальности</span>
            </label>
            {checkError && (
              <p className="text-red-500 text-sm self-start ">
                {checkError}
              </p>
            )}
            <button type="submit" className="bg-[#1D75DD] rounded-2xl p-3 text-white cursor-pointer">Зарегистрироваться</button>
            <div className="flex justify-between"><p className="text-[13px]">Уже есть аккаунт</p><p className="text-[13px] cursor-pointer text-[#1D75DD]" onClick={() => setmodal("login")}>Войти</p></div>
            <div className="flex items-center gap-4">

              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-gray-500">или</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>
            <button className="p-3 bg-gray-50 rounded-xl flex items-center justify-center gap-3"><Image src={google} alt="Google" /> Зарегистрироваться  с  Google</button>
          </form>
        </div>)
      }    {modal === "register-otp" &&
        (<div className="bg-white p-10  flex flex-col items-center text-center gap-4 rounded-2xl ">
          <Image src={cencel} alt="cencel" className="self-end w-6  cursor-pointer" onClick={() => setShowModal(false)} />
          <h2 className="text-3xl">Введите код</h2>
          <p className="text-gray-400">Мы отправили СМС с 4-значным кодом на номер {phone} </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmitVerify}>
            <OtpInput
              value={otp}
              onChange={(value) => {
                setOtp(value);
                setOtpError(false);
              }}
              numInputs={4}
              inputStyle={{
                width: '80px',
                height: '64px',
                fontSize: '24px',
                textAlign: 'center',
                borderRadius: '16px',
                backgroundColor: '#f9fafb',
                border: '1px solid transparent',
                outline: 'none',
                margin: '0 8px',
              }}
              shouldAutoFocus
              inputType="tel"
              renderInput={(props) => (
                <input {...props} className="otp-input " style={{
                  ...props.style,
                  border: otpError
                    ? '1px solid red'
                    : '1px solid transparent',
                }} />
              )}
            />
            <button type="submit" className={otpError ? "border border-red-500 rounded-2xl p-3  text-red-500 bg-gray-50" : "bg-[#1D75DD] rounded-2xl p-3 text-white"}  >Подтвердить</button>
            <button type="submit" className="bg-gray-50 rounded-2xl p-3 text-[#1D75DD] cursor-pointer" onClick={handleSubmit}>Повторно отправить код </button>
          </form>
        </div>)
      }
      {modal === "register-info" &&
        (<div className="bg-white p-5  flex flex-col  text-center  gap-4 rounded-2xl ">
          <Image src={cencel} alt="cencel" className="self-end w-6  cursor-pointer" onClick={() => setShowModal(false)} />
          <h2 className="text-4xl">Akkaunt info</h2>
          <p className="text-gray-400">Напишите данные</p>
          <form className="flex flex-col gap-4" onSubmit={handleRerister}>
            <PhoneInput
              country="kg"
              value={phone}
              placeholder="Telefon raqam"
              inputClass="!w-90  !h-12 !rounded-xl !border-none  !bg-gray-50 !text-base"
              buttonClass="!border-none !bg-gray-50 !rounded-l-xl"
            />
            <input type="password" placeholder="create your password" className="bg-gray-50 p-2.5 rounded-xl outline-none" onChange={(e) => setPassword(e.target.value)} />
            <input type="email" placeholder="your email" className="bg-gray-50 p-2.5 rounded-xl outline-none" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="full_name" className="bg-gray-50 p-2.5 rounded-xl outline-none" onChange={(e) => setName(e.target.value)} />
            <button type="submit" className="bg-[#1D75DD] rounded-2xl p-3 text-white">Войти</button>
          </form>
        </div>
        )}
    </div>
  )
}
