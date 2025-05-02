export default {
  async fetch(request) {
    const قناة_التليجرام = 'https://t.me/moviball';
    
    try {
      const رابط_الطلب = new URL(request.url);
      رابط_الطلب.hostname = 'edge66.magictvbox.com';
      
      // تعزيز الحماية: تنظيف المسار
      const مسار_نظيف = رابط_الطلب.pathname.replace(/[^a-zA-Z0-9_\-./]/g, '');
      رابط_الطلب.pathname = مسار_نظيف;
      
      // إرسال الطلب مع الحفاظ على الهيدرات الأساسية
      const الاستجابة = await fetch(رابط_الطلب, {
        headers: {
          'Referer': 'http://magictvbox.com/',
          'Origin': 'http://magictvbox.com/',
          'User-Agent': request.headers.get('User-Agent') || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0'
        },
        cf: {
          cacheEverything: false,
          scrapeShield: true
        }
      });
      
      // السماح لأي مصدر (CORS)
      const رؤوس_الاستجابة = new Headers(الاستجابة.headers);
      رؤوس_الاستجابة.set('Access-Control-Allow-Origin', '*');
      رؤوس_الاستجابة.set('X-Frame-Options', 'ALLOWALL');
      رؤوس_الاستجابة.set('X-Content-Type-Options', 'nosniff');
      رؤوس_الاستجابة.set('Content-Security-Policy', "default-src 'self' *");
      
      return new Response(الاستجابة.body, {
        headers: رؤوس_الاستجابة,
        status: الاستجابة.status,
        statusText: الاستجابة.statusText
      });
    } catch (error) {
      return Response.redirect(قناة_التليجرام, 302);
    }
  }
}
