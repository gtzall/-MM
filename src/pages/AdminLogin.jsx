import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

// Mock authentication - will be connected to backend later
export const AdminLogin = ({ onLogin }) => {
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login - credentials: martinsADM/121365
    setTimeout(() => {
      if (credentials.username === 'martinsADM' && credentials.password === '121365') {
        localStorage.setItem('adminAuth', 'true');
        toast({
          title: "Login realizado!",
          description: "Bem-vindo ao painel administrativo.",
        });
        onLogin(true);
      } else {
        toast({
          title: "Erro de autenticação",
          description: "Usuário ou senha incorretos.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 border-0 shadow-2xl">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Painel Admin</h1>
          <p className="text-slate-600">Faça login para gerenciar o sistema</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="username" className="text-slate-700 font-medium">Usuário</Label>
            <Input
              id="username"
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
              className="mt-1 h-11"
              placeholder="Digite seu usuário"
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-slate-700 font-medium">Senha</Label>
            <Input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              className="mt-1 h-11"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white h-12 text-lg"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs text-blue-900">
            <strong>Demo:</strong> Use <code className="bg-blue-100 px-1 rounded">martinsADM</code> / <code className="bg-blue-100 px-1 rounded">121365</code>
          </p>
        </div>
      </Card>
    </div>
  );
};
