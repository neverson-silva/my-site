import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const contactProps = {
      nameEntryId: process.env.GOOGLE_FORM_FORM_NAME_ENTRY_ID!,
      emailEntryId: process.env.GOOGLE_FORM_EMAIL_ENTRY_ID!,
      messageEntryId: process.env.GOOGLE_FORM_MESSAGE_ENTRY_ID!,
      googleFormId: process.env.GOOGLE_FORM_ID!,
    };
    const formUrl = `https://docs.google.com/forms/d/e/${contactProps.googleFormId}/formResponse`;

    const formDataGoogle = new FormData();
    formDataGoogle.append(`entry.${contactProps.nameEntryId}`, name);
    formDataGoogle.append(`entry.${contactProps.emailEntryId}`, email);
    formDataGoogle.append(`entry.${contactProps.messageEntryId}`, message);

    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors", // o Google Forms não retorna resposta CORS
      body: formDataGoogle,
    });

    // Envia para o Google Forms
    await fetch(formUrl, {
      method: "POST",
      body: formDataGoogle,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar para o Google Form:", err);
    return NextResponse.json(
      { success: false, error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
