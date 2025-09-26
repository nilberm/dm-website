"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DrawingTypeConfig } from "@/data/drawingTypes";
import DrawingTypeEditor from "@/components/admin/DrawingTypeEditor";

export default function AdminDashboard() {
  const [drawingTypes, setDrawingTypes] = useState<DrawingTypeConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticação via cookie
    const isAuthenticated = document.cookie.includes("admin-auth=true");
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }

    // Carregar dados dos tipos de desenho
    loadDrawingTypes();
  }, [router]);

  const loadDrawingTypes = async () => {
    try {
      const response = await fetch("/api/drawing-types");
      const data = await response.json();
      setDrawingTypes(data);
    } catch (error) {
      console.error("Erro ao carregar tipos de desenho:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedType: DrawingTypeConfig) => {
    try {
      const response = await fetch("/api/drawing-types", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedType),
      });

      if (response.ok) {
        // Atualizar estado local
        setDrawingTypes(prev => 
          prev.map(type => 
            type.slug === updatedType.slug ? updatedType : type
          )
        );
        alert("Tipo de desenho atualizado com sucesso!");
      } else {
        alert("Erro ao salvar alterações");
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar alterações");
    }
  };

  const handleLogout = () => {
    // Remover cookie de autenticação
    document.cookie = "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard Admin - Debora Mara
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid gap-6">
            {drawingTypes.map((type) => (
              <DrawingTypeEditor
                key={type.slug}
                drawingType={type}
                onSave={handleSave}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
