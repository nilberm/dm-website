import { NextRequest, NextResponse } from "next/server";
import { drawingTypes } from "@/data/drawingTypes";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src/data/drawingTypes.json");

// Função para ler dados do arquivo JSON
async function readDrawingTypes(): Promise<typeof drawingTypes> {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, "utf8");
      return JSON.parse(fileContent);
    }
  } catch (error) {
    console.error("Erro ao ler arquivo de dados:", error);
  }
  
  // Fallback para dados padrão
  return drawingTypes;
}

// Função para escrever dados no arquivo JSON
async function writeDrawingTypes(data: typeof drawingTypes): Promise<boolean> {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Erro ao escrever arquivo de dados:", error);
    return false;
  }
}

export async function GET() {
  try {
    const data = await readDrawingTypes();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao carregar tipos de desenho:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedType = await request.json();
    
    // Ler dados atuais
    const currentData = await readDrawingTypes();
    
    // Encontrar e atualizar o tipo específico
    const updatedData = currentData.map((type: any) => 
      type.slug === updatedType.slug ? updatedType : type
    );
    
    // Salvar dados atualizados
    const success = await writeDrawingTypes(updatedData);
    
    if (success) {
      return NextResponse.json({ message: "Tipo de desenho atualizado com sucesso" });
    } else {
      return NextResponse.json({ error: "Erro ao salvar dados" }, { status: 500 });
    }
  } catch (error) {
    console.error("Erro ao atualizar tipo de desenho:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
