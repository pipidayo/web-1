import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // nodemailer の設定
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmail を使用
      auth: {
        user: process.env.EMAIL_USER, // 環境変数に保存
        pass: process.env.EMAIL_PASS, // 環境変数に保存
      },
    })

    // メールの内容
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // 自分のメールアドレス
      subject: `お問い合わせ: ${name}`,
      text: `名前: ${name}\nEmail: ${email}\n\n${message}`,
    }

    // メールを送信
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'メールを送信しました！' },
      { status: 200 }
    )
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { message: 'エラーが発生しました' },
      { status: 500 }
    )
  }
}
