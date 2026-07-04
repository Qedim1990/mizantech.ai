"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { SERVICES } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// TODO (icra öncəsi): bu URL-i real Make.com webhook-una (və ya digər
// backend endpoint-ə) dəyişin. Make.com scenario CRM-ə yazıb WhatsApp/e-poçt
// bildirişi göndərə bilər — mövcud avtomatlaşdırma stack-inizə uyğundur.
const FORM_ENDPOINT = "https://hook.make.com/REPLACE_WITH_REAL_WEBHOOK_ID";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Bu sahə tələb olunur";
    if (!form.email.trim()) next.email = "Bu sahə tələb olunur";
    else if (!EMAIL_RE.test(form.email)) next.email = "Düzgün e-poçt ünvanı daxil edin";
    if (!form.message.trim()) next.message = "Bu sahə tələb olunur";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server xətası");
      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-success/30 bg-success-bg p-8 text-center">
        <p className="font-semibold text-navy-900">Təşəkkürlər! Mesajınız alındı.</p>
        <p className="mt-1.5 text-sm text-neutral-600">
          24 saat ərzində sizinlə əlaqə saxlayacağıq.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Ad Soyad"
          required
          placeholder="Məs: Əli Məmmədov"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          error={errors.name}
        />
        <Input
          label="E-poçt"
          type="email"
          required
          placeholder="ad@nümunə.com"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Telefon"
          type="tel"
          hint="İstəyə bağlı"
          value={form.phone}
          onChange={(e) => updateField("phone", e.target.value)}
        />
        <Input
          label="Şirkət/Brend Adı"
          value={form.company}
          onChange={(e) => updateField("company", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="service" className="block text-sm font-medium text-navy-900">
            Maraqlandığınız Xidmət
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => updateField("service", e.target.value)}
            className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-navy-900 transition-colors hover:border-neutral-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
          >
            <option value="">Seçin...</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Digər / Əmin deyiləm</option>
          </select>
        </div>
        <Input
          label="Büdcə Aralığı"
          hint="İstəyə bağlı"
          placeholder="Məs: 1000-3000 AZN"
          value={form.budget}
          onChange={(e) => updateField("budget", e.target.value)}
        />
      </div>

      <Textarea
        label="Layihəniz haqqında qısa məlumat"
        required
        placeholder="Layihəniz, məqsədiniz və vaxt çərçivəniz haqqında qısa məlumat verin..."
        value={form.message}
        onChange={(e) => updateField("message", e.target.value)}
        error={errors.message}
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-error">
          Nəsə səhv getdi — yenidən cəhd edin.
        </p>
      )}

      <Button type="submit" size="lg" loading={status === "submitting"} className="w-full sm:w-auto">
        Sorğunu Göndər
      </Button>

      <p className="text-xs text-neutral-600">
        Məlumatlarınız yalnız sizinlə əlaqə üçün istifadə olunur, üçüncü tərəflərlə paylaşılmır.
      </p>

      <a
        href="https://wa.me/994000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded border border-neutral-300 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-400 sm:w-auto sm:px-6"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp-da Yazın
      </a>
    </form>
  );
}
