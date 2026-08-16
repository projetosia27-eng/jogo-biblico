# Guia de Preparação e Publicação Android (PWA / TWA / Google Play)

Este documento descreve a estrutura PWA e o processo para conversão em aplicativo Android nativo (AAB/APK) e publicação na Google Play Store.

---

## 1. Localização dos Arquivos PWA Principais

- **Manifesto Web PWA**: `/public/manifest.webmanifest` e `/public/manifest.json`
- **Service Worker (Offline & Cache)**: `/public/sw.js`
- **Ícones da Aplicação**: `/public/icons/`
  - `icon-192.png` (192x192 PNG)
  - `icon-512.png` (512x512 PNG)
  - `icon-maskable-192.png` (Maskable 192x192)
  - `icon-maskable-512.png` (Maskable 512x512)
  - `apple-touch-icon.png` (180x180)
  - `icon.svg` (Vetor SVG)
- **Verificação do Domínio Android**: `/public/.well-known/assetlinks.json`
- **Build de Produção**: `npm run build` (Gera a pasta `/dist`)

---

## 2. Instruções para Gerar Pacote Android (.aab) para a Google Play Store

Para converter este PWA em pacote Android oficial usando **Bubblewrap CLI** (ferramenta oficial do Google para Trusted Web Activities):

### Passo 1: Instalar o Bubblewrap CLI
```bash
npm install -g @bubblewrap/cli
```

### Passo 2: Inicializar o Projeto Android TWA
Execute na raiz do projeto apontando para a URL HTTPS do app implantado:
```bash
bubblewrap init --manifest=https://seu-dominio.com/manifest.webmanifest
```

### Passo 3: Configurar os Parâmetros Android
Durante o assistente do Bubblewrap, configure:
- **Application Name**: Jornada da Fé
- **Short Name**: Jornada da Fé
- **Application ID / Package Name**: `com.jornada.dafe.app` (ou o de sua preferência)
- **Target SDK**: **36** (Compatível com o requisito mínimo exigido pela Google Play em 2026+)
- **Display Mode**: `standalone`
- **Orientation**: `portrait`

### Passo 4: Gerar o Arquivo AAB de Produção
```bash
bubblewrap build
```
Isso criará o arquivo `app-release-signed.aab`.

---

## 3. Configuração de Validação Digital (Digital Asset Links)

Para que a barra de endereço do navegador desapareça completamente no Android TWA:

1. Obtenha a impressão digital SHA256 do seu certificado de assinatura:
   ```bash
   keytool -list -v -keystore android.keystore -alias androiddb
   ```
2. Abra `/public/.well-known/assetlinks.json` e substitua a fingerprint `00:00:...` pela SHA256 real.
3. Faça o deploy do site. A verificação entre o aplicativo Android e a URL HTTPS ocorrerá automaticamente.

---

## 4. Requisitos Atendidos da Google Play

- **Target SDK Level**: Configurado para API 36+.
- **Arquitetura 64-bit**: Tratado nativamente pela runtime TWA do Chrome.
- **Funcionamento Offline**: Garantido pelo Service Worker em `/public/sw.js`.
- **Privacidade & Segurança**: Conexão HTTPS rigorosa e armazenamento local sem rastreamento pessoal.
