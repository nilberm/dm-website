"use client";

import { useState } from "react";
import { DrawingTypeConfig } from "@/data/drawingTypes";

interface DrawingTypeEditorProps {
  drawingType: DrawingTypeConfig;
  onSave: (updatedType: DrawingTypeConfig) => void;
}

export default function DrawingTypeEditor({ drawingType, onSave }: DrawingTypeEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<DrawingTypeConfig>(drawingType);

  const handleInputChange = (field: keyof DrawingTypeConfig, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePersonPriceChange = (size: keyof typeof drawingType.personPrices, value: number) => {
    setFormData(prev => ({
      ...prev,
      personPrices: {
        ...prev.personPrices,
        [size]: value
      }
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };

  const addImage = () => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ""]
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(drawingType);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {drawingType.name}
        </h3>
        <div className="space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md"
              >
                Salvar
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Editar
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informações Básicas */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-gray-900">Informações Básicas</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              disabled={!isEditing}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preço Base
            </label>
            <input
              type="number"
              value={formData.basePrice}
              onChange={(e) => handleInputChange("basePrice", Number(e.target.value))}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100"
            />
          </div>
        </div>

        {/* Preços por Tamanho */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-gray-900">Preços por Tamanho</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Busto
            </label>
            <input
              type="number"
              value={formData.personPrices.busto}
              onChange={(e) => handlePersonPriceChange("busto", Number(e.target.value))}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meio Corpo
            </label>
            <input
              type="number"
              value={formData.personPrices.meioCorpo}
              onChange={(e) => handlePersonPriceChange("meioCorpo", Number(e.target.value))}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Corpo Inteiro
            </label>
            <input
              type="number"
              value={formData.personPrices.corpoInteiro}
              onChange={(e) => handlePersonPriceChange("corpoInteiro", Number(e.target.value))}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preço Pet
            </label>
            <input
              type="number"
              value={formData.petPrice}
              onChange={(e) => handleInputChange("petPrice", Number(e.target.value))}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-gray-900">Galeria de Imagens</h4>
          {isEditing && (
            <button
              onClick={addImage}
              className="px-3 py-1 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
            >
              Adicionar Imagem
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {formData.images.map((image, index) => (
            <div key={index} className="relative">
              <input
                type="url"
                value={image}
                onChange={(e) => handleImageChange(index, e.target.value)}
                disabled={!isEditing}
                placeholder="URL da imagem"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100"
              />
              {isEditing && formData.images.length > 1 && (
                <button
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700"
                >
                  ×
                </button>
              )}
              {image && (
                <div className="mt-2">
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-24 object-cover rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
