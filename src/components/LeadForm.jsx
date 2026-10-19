import { useState } from 'react';
import { sendLead } from '../services/sendLead.js';
import { ArrowUpRight } from './Icons.jsx';

export default function LeadForm({ variant = 'light', withComment = false, source = 'form' }) {
  const [values, setValues] = useState({ name: '', phone: '', comment: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); 

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const er = {};
    if (values.name.trim().length < 2) er.name = 'Введите ваше имя';
    if (values.phone.replace(/\D/g, '').length < 10) er.phone = 'Введите корректный номер телефона';
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus('loading');
    try {
      await sendLead({ ...values, source });
      setStatus('success');
      setValues({ name: '', phone: '', comment: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`form form--${variant} form__success`} role="status">
        <strong>Спасибо! Заявка отправлена.</strong>
        <p>Мы перезвоним вам в ближайшее время.</p>
        <button type="button" className="link-btn" onClick={() => setStatus('idle')}>
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form className={`form form--${variant}`} onSubmit={onSubmit} noValidate>
      <label className="field">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          aria-invalid={!!errors.name}
        />
        {errors.name && <span className="field__error">{errors.name}</span>}
      </label>

      <label className="field">
        <input
          type="tel"
          name="phone"
          placeholder="Ваш номер телефона"
          autoComplete="tel"
          value={values.phone}
          onChange={onChange}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <span className="field__error">{errors.phone}</span>}
      </label>

      {withComment && (
        <label className="field">
          <textarea
            name="comment"
            placeholder="Дополнительный комментарий"
            rows={5}
            value={values.comment}
            onChange={onChange}
          />
        </label>
      )}

      {status === 'error' && <p className="field__error">Не удалось отправить. Попробуйте ещё раз.</p>}

      <button type="submit" className="form__submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Отправка…' : 'Отправить'} <ArrowUpRight />
      </button>
    </form>
  );
}
