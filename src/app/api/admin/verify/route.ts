import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    // Verificar se a senha está correta
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      console.error("ADMIN_PASSWORD não está definida nas variáveis de ambiente");
      return NextResponse.json({ error: "Configuração de segurança não encontrada" }, { status: 500 });
    }
    
    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
    }
  } catch (error) {
    console.error("Erro na verificação de senha:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
