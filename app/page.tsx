"use client";

import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  FileText,
  Award,
  User,
  LogOut,
  Home,
  ClipboardList,
  DollarSign,
  MessageSquare,
  Bell,
  Menu,
  X,
} from "lucide-react";

export default function KTUPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [activeMenu, setActiveMenu] = useState("anasayfa");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const studentData = {
    name: "Ahsen Nazlı Uydur",
    studentNo: "427905",
    advisor: "Arş. Gör. Edanur FETTAHOĞLU",
    faculty: "Mimarlık Fakültesi",
    department: "İç Mimarlık Bölümü (I. Öğretim)",
    class: "4. Sınıf",
    status: "Aktif Öğrenci",
    email: "427905@ogr.ktu.edu.tr",
    phone: "5446370800",
    gno: "1.91",
    tckn: "49888608304",
    tuitionStatus: "Harç ödemeniz gerekmemektedir.",
  };
  const transcriptData = [
    {
      year: "1. Sınıf",
      terms: [
        {
          name: "Güz Dönemi",
          average: 2.35,
          gno: 2.35,
          courses: [
            {
              code: "IMB1001",
              name: "İç Mimarlıkta Teknik Resim - I",
              credit: 4,
              grade: "CC",
            },
            {
              code: "IMB1003",
              name: "Temel Sanat Eğitimi",
              credit: 8,
              grade: "BB",
            },
            {
              code: "IMB1005",
              name: "İç Mimarlığa Giriş",
              credit: 3,
              grade: "CB",
            },
            {
              code: "IMB1007",
              name: "Tasarıma Giriş ve İç Mimari Proje - I",
              credit: 6,
              grade: "DC",
            },
            { code: "TDB1001", name: "Türk Dili - I", credit: 2, grade: "AA" },
            { code: "YDB1003", name: "İngilizce - I", credit: 2, grade: "FF" },
          ],
        },
        {
          name: "Bahar Dönemi",
          average: 2.05,
          gno: 2.22,
          courses: [
            {
              code: "IMB1002",
              name: "İç Mimarlıkta Teknik Resim - II",
              credit: 4,
              grade: "CB",
            },
            {
              code: "IMB1004",
              name: "İç Mimari Proje - II",
              credit: 6,
              grade: "CC",
            },
            {
              code: "IMB1006",
              name: "Mimarlık ve Sanat Tarihi",
              credit: 3,
              grade: "BB",
            },
            { code: "IMB1008", name: "Yapı Bilgisi", credit: 3, grade: "DD" },
            { code: "TDB1000", name: "Türk Dili - II", credit: 2, grade: "AA" },
            { code: "YDB1004", name: "İngilizce - II", credit: 2, grade: "BA" },
          ],
        },
      ],
    },
    {
      year: "2. Sınıf",
      terms: [
        {
          name: "Güz Dönemi",
          average: 2.75,
          gno: 2.45,
          courses: [
            {
              code: "IMB2013",
              name: "İç Mimari Proje - III",
              credit: 6,
              grade: "BB",
            },
            {
              code: "IMB2017",
              name: "Malzeme Bilgisi - I",
              credit: 3,
              grade: "BA",
            },
            {
              code: "IMB2025",
              name: "Bilgisayar Destekli Tasarım - I",
              credit: 4,
              grade: "BA",
            },
            {
              code: "IMB2029",
              name: "Taşıyıcı Sistemler",
              credit: 2,
              grade: "CC",
            },
            {
              code: "IMB2031",
              name: "İç Mekanda Yüzey Anlatımı",
              credit: 3,
              grade: "BB",
            },
            { code: "IMB2033", name: "Meslek Etiği", credit: 2, grade: "AA" },
            {
              code: "IMB2035",
              name: "İnsan Mekan İlişkisi",
              credit: 2,
              grade: "BA",
            },
            {
              code: "IMB2037",
              name: "Yaratıcı Düşünme",
              credit: 2,
              grade: "AA",
            },
          ],
        },
        {
          name: "Bahar Dönemi",
          average: 2.55,
          gno: 2.51,
          courses: [
            {
              code: "IMB2002",
              name: "İç Mimari Proje - IV",
              credit: 6,
              grade: "BA",
            },
            {
              code: "IMB2004",
              name: "Bilgisayar Destekli Tasarım - II",
              credit: 4,
              grade: "BB",
            },
            { code: "IMB2014", name: "Estetik", credit: 2, grade: "AA" },
            { code: "IMB2020", name: "Detay Bilgisi", credit: 3, grade: "BA" },
            {
              code: "IMB2022",
              name: "Malzeme Bilgisi - II",
              credit: 3,
              grade: "BB",
            },
            { code: "IMB2024", name: "Meslek Etiği", credit: 2, grade: "AA" },
            {
              code: "IMB2026",
              name: "İnsan Mekan İlişkisi",
              credit: 2,
              grade: "BA",
            },
            {
              code: "IMB2028",
              name: "Yaratıcı Düşünme",
              credit: 2,
              grade: "AA",
            },
          ],
        },
      ],
    },
    {
      year: "3. Sınıf",
      terms: [
        {
          name: "Güz Dönemi",
          average: 1.45,
          gno: 2.05,
          courses: [
            { code: "IMB3011", name: "Oda Akustiği", credit: 3, grade: "FF" },
            {
              code: "IMB3013",
              name: "İç Mimari Proje - V",
              credit: 6,
              grade: "DD",
            },
            { code: "IMB3019", name: "Mobilya Tarihi", credit: 4, grade: "CC" },
            {
              code: "IMB3023",
              name: "Isıtma Havalandırma ve Tesisat",
              credit: 3,
              grade: "FF",
            },
            {
              code: "IMB3025",
              name: "Mimari Simülasyon - I",
              credit: 3,
              grade: "DD",
            },
            {
              code: "IMB3027",
              name: "Vitrin Tasarımı",
              credit: 2,
              grade: "FF",
            },
          ],
        },
        {
          name: "Bahar Dönemi",
          average: 1.35,
          gno: 1.9,
          courses: [
            { code: "IMB3031", name: "Aydınlatma", credit: 4, grade: "FF" },
            { code: "IMB3033", name: "Röleve", credit: 6, grade: "DC" },
            {
              code: "IMB3035",
              name: "Mobilya Tasarımı",
              credit: 4,
              grade: "FF",
            },
            {
              code: "IMB3037",
              name: "İç Mimari Proje - VI",
              credit: 6,
              grade: "DD",
            },
            {
              code: "IMB3039",
              name: "İç Mekan Tasarımında Sürdürülebilir Malzemeler",
              credit: 3,
              grade: "FF",
            },
            {
              code: "IMB3041",
              name: "Mimari Simülasyon - II",
              credit: 3,
              grade: "FF",
            },
            { code: "IMB3043", name: "Sahne Tasarımı", credit: 2, grade: "FF" },
          ],
        },
      ],
    },
  ];

  const courses = [
    {
      code: "MIM301",
      name: "İleri Tasarım Stüdyosu",
      instructor: "Prof. Dr. Ayşe Yılmaz",
      credit: 6,
    },
    {
      code: "MIM302",
      name: "Kentsel Tasarım",
      instructor: "Doç. Dr. Mehmet Kaya",
      credit: 4,
    },
    {
      code: "MIM303",
      name: "Yapı Fiziği",
      instructor: "Dr. Zeynep Demir",
      credit: 3,
    },
  ];

  const notifications = [
    {
      title: "Sınav Duyurusu",
      message: "Vize sınavı 15.12.2024 tarihinde yapılacaktır.",
      date: "01.12.2024",
    },
    {
      title: "Kayıt Yenileme",
      message: "Kayıt yenileme 15-30 Aralık tarihleri arası.",
      date: "28.11.2024",
    },
    {
      title: "Ders Seçimi",
      message: "Bahar dönemi ders seçimleri 20-25 Aralık arası.",
      date: "25.11.2024",
    },
  ];

  const petitions = [
    {
      no: "DLK-2024-1234",
      type: "Ders İntibak",
      date: "25.11.2024",
      status: "İnceleniyor",
    },
    {
      no: "DLK-2024-1156",
      type: "Mazeret Sınavı",
      date: "10.11.2024",
      status: "Onaylandı",
    },
  ];

  const handleLogin = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (studentNumber === "427905" && password === "08304") {
      setIsLoggedIn(true);
    } else {
      alert("Öğrenci numarası veya şifre hatalı!");
    }
  };
  const Info = ({ label, value }: { label: string; value: string }) => (
    <div className="border-b pb-2">
      <p className="text-gray-600 text-sm">{label}</p>
      <p className="font-semibold text-sm break-all">{value}</p>
    </div>
  );
  const menuItems = [
    { id: "anasayfa", label: "Ana Sayfa", icon: Home },
    { id: "bilgiler", label: "Öğrenci Bilgileri", icon: User },
    { id: "transkript", label: "Transkript", icon: FileText },
    { id: "vize", label: "Vize Sonuçları", icon: Award },
    { id: "final", label: "Final Sonuçları", icon: Award },
    { id: "danismanlik", label: "Danışmanlık", icon: MessageSquare },
    { id: "odemeler", label: "Ödemeler", icon: DollarSign },
    { id: "dilekce", label: "Dilekçelerim", icon: ClipboardList },
    { id: "duyurular", label: "Duyurular", icon: Bell },
  ];

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    setIsMobileMenuOpen(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br text-black from-[#004466] to-[#003355] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
            {/* 🔸 KTÜ Logosu */}
            <div className="flex flex-col items-center mb-6">
              <img
                src="/ktu.png"
                alt="KTÜ Logo"
                className="w-20 h-20 mb-3 object-contain"
              />
              <h1 className="text-2xl font-bold text-[#000304]">KTÜ</h1>
              <p className="text-sm text-gray-600">
                KARADENİZ TEKNİK ÜNİVERSİTESİ
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Öğrenci Numarası"
                value={studentNumber}
                onChange={(e) => setStudentNumber(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin(e)}
                className="w-full p-4 border-2 rounded-full focus:border-[#004466] outline-none text-black placeholder-gray-500"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Şifre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleLogin(e)}
                  className="w-full p-4 border-2 rounded-full focus:border-[#004466] outline-none pr-12 text-black placeholder-gray-500"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-[#004466] text-white font-semibold py-4 rounded-full hover:bg-[#003355]"
              >
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#004466] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-[#003355] rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <img
              src="/ktu.png"
              alt="KTÜ Logo"
              className="w-10 h-10 object-contain rounded bg-white p-1"
            />{" "}
            <div>
              <h1 className="text-lg md:text-xl font-bold">KTÜ</h1>
            </div>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 bg-red-600 px-3 py-2 rounded-lg hover:bg-red-700 text-sm"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Çıkış</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 shadow-2xl transition-transform duration-300 w-72 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 bg-[#004466] text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src="/ktu.png"
                alt="KTÜ Logo"
                className="w-10 h-10 object-contain rounded bg-white p-1"
              />{" "}
              <div>
                <h2 className="font-bold text-lg">KTÜ Portal</h2>
                <p className="text-xs opacity-90">{studentData.name}</p>
              </div>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeMenu === item.id
                    ? "bg-[#004466] text-white"
                    : "hover:bg-gray-100 text-black "
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          {activeMenu === "anasayfa" && (
            <div>
              {/* Öğrenci Fotoğrafı ve Bilgiler */}
              <div className="flex items-center gap-6 mb-6 border-b pb-4">
                <img
                  src="ahsen.png"
                  alt="Öğrenci Fotoğrafı"
                  className="w-28 h-36 object-cover border rounded"
                />
                <div>
                  <h1 className="text-2xl font-bold text-[#000304]">
                    Ahsen Nazlı Uydur
                  </h1>
                  <p className="text-sm text-black">Öğrenci No: 427905</p>
                  <p className="text-sm text-black">
                    İç Mimarlık Bölümü (I. Öğretim)
                  </p>
                  <p className="text-sm text-black">Mimarlık Fakültesi</p>
                  <p className="text-sm text-black">Durum: Aktif Öğrenci</p>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Ana Sayfa
              </h2>

              {/* Bilgi Kartları */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-500 text-white p-4 md:p-6 rounded-lg">
                  <p className="text-sm">GNO</p>
                  <p className="text-2xl md:text-3xl font-bold">
                    {studentData.gno}
                  </p>
                </div>
                <div className="bg-green-500 text-white p-4 md:p-6 rounded-lg">
                  <p className="text-sm">Aktif Ders</p>
                  <p className="text-2xl md:text-3xl font-bold">11</p>
                </div>
                <div className="bg-red-500 text-white p-4 md:p-6 rounded-lg">
                  <p className="text-sm">Alttan alınan Ders Sayısı</p>
                  <p className="text-2xl md:text-3xl font-bold">4</p>
                </div>
                <div className="bg-purple-500 text-white p-4 md:p-6 rounded-lg">
                  <p className="text-sm">Durum</p>
                  <p className="text-lg font-bold">Aktif</p>
                </div>
              </div>

              {/* Duyurular */}
              <h3 className="text-lg font-semibold mb-4">Son Duyurular</h3>
              {notifications.map((n, i) => (
                <div
                  key={i}
                  className="border-l-4 border-blue-500 pl-3 py-2 mb-3"
                >
                  <p className="font-semibold text-sm md:text-base text-gray-600">
                    {n.title}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {n.message}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeMenu === "bilgiler" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Öğrenci Bilgileri
              </h2>
              <div className="space-y-3">
                <Info label="Ad Soyad" value={studentData.name} />
                <Info label="T.C. Kimlik No" value={studentData.tckn} />
                <Info label="Öğrenci No" value={studentData.studentNo} />
                <Info label="Sınıf" value={studentData.class} />
                <Info label="Danışman" value={studentData.advisor} />
                <Info label="Fakülte" value={studentData.faculty} />
                <Info label="Bölüm" value={studentData.department} />
                <Info label="Durum" value={studentData.status} />
                <Info label="E-posta" value={studentData.email} />
                <Info label="Telefon" value={studentData.phone} />
                <Info label="Harç Durumu" value={studentData.tuitionStatus} />
              </div>
            </div>
          )}

          {activeMenu === "dersler" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Ders Programı
              </h2>
              <div className="space-y-3">
                {courses.map((c, i) => (
                  <div key={i} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-bold text-sm">{c.code}</p>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {c.credit} Kredi
                      </span>
                    </div>
                    <p className="font-semibold text-sm mb-1">{c.name}</p>
                    <p className="text-xs text-gray-600">{c.instructor}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeMenu === "transkript" && (
            <div className="p-2">
              <h2 className="text-2xl font-bold text-[#000304] mb-4">
                Transkript
              </h2>
              {transcriptData.map((year) => (
                <div key={year.year} className="mb-8 text-[#000304]">
                  <h3 className="text-xl font-semibold mb-2 text-[#000304]">{year.year}</h3>
                  {year.terms.map((term) => (
                    <div key={term.name} className="mb-6 text-[#000304]">
                      <h4 className="font-semibold text-[#000304] mb-2" >
                        {term.name}
                      </h4>
                      <table className="w-full text-[#000304] text-sm border">
                        <thead className="bg-gray-400 text-[#000304]">
                          <tr>
                            <th className="border px-2 py-1 text-left text-[#000304]">Kod</th>
                            <th className="border px-2 py-1 text-left text-[#000304]">
                              Ders Adı
                            </th>
                            <th className="border px-2 py-1 text-center text-[#000304]">
                              Kredi
                            </th>
                            <th className="border px-2 py-1 text-center text-[#000304]">
                              Not
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {term.courses.map((course) => (
                            <tr key={course.code}>
                              <td className="border px-2 py-1">
                                {course.code}
                              </td>
                              <td className="border px-2 py-1">
                                {course.name}
                              </td>
                              <td className="border px-2 py-1 text-center">
                                {course.credit}
                              </td>
                              <td className="border px-2 py-1 text-center">
                                {course.grade}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="flex justify-between mt-2 text-sm font-medium">
                        <span>Dönem Ortalaması: {term.average.toFixed(2)}</span>
                        <span>
                          Genel Not Ortalaması (GNO): {term.gno.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <div className="text-right mt-8 font-semibold text-lg">
                🎓 Genel Not Ortalaması (GNO):{" "}
                <span className="text-[#000304]">1.91</span>
              </div>
            </div>
          )}

          {activeMenu === "vize" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Vize Sonuçları
              </h2>
              <div className="space-y-3 text-[#000304]">
                25 kasım 2025 tarihinden itibaren vize sonuçları açıklanacaktır.
              </div>
            </div>
          )}

          {activeMenu === "final" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Final Sonuçları
              </h2>
              <div className="space-y-3 text-[#000304]">
                10 ocak 2026 tarihinden itibaren Final sonuçları açıklanacaktır.
              </div>
            </div>
          )}

          {activeMenu === "danismanlik" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Danışmanlık
              </h2>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <div>
                  <span className="font-semibold text-sm text-gray-600">Danışman:</span>{" "}
                  <span className="text-sm text-gray-600">{studentData.advisor}</span>
                </div>
                <div>
                  <span className="font-semibold text-sm text-gray-600">E-posta:</span>{" "}
                  <span className="text-sm text-gray-600">edanurfettahoglu@ktu.edu.tr</span>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "odemeler" && (
            <div className="text-gray-600">
              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Ödemeler
              </h2>
              Aktif ödeme bulunmamaktadır.
            </div>
          )}

          {activeMenu === "dilekce" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Dilekçelerim
              </h2>

              <div className="space-y-3">
                {petitions.map((p, i) => (
                  <div key={i} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-mono text-xs text-gray-600">
                          {p.no}
                        </p>
                        <p className="font-semibold text-sm text-gray-600">{p.type}</p>
                      </div>
                      <span className="bg-yellow-100  text-yellow-800 px-2 py-1 rounded text-xs">
                        {p.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{p.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeMenu === "duyurular" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#000304] mb-4">
                Duyurular
              </h2>
              <div className="space-y-3">
                {notifications.map((n, i) => (
                  <div key={i} className="border rounded-lg p-3">
                    <h3 className="font-bold text-sm mb-1">{n.title}</h3>
                    <p className="text-xs text-black mb-2">{n.message}</p>
                    <p className="text-xs text-gray-500">{n.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
