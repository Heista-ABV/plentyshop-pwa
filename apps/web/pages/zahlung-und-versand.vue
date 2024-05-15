<template>
  <div class="px-4 md:px-6 lg:px-10 pb-10 max-w-screen-3xl mx-auto mt-10  overflow-x-auto" v-html="pageContent" />
</template>

<script setup lang="ts">

definePageMeta({
  pageType: 'static',
});

const pageContent = "<h1 class='print-header'>Zahlung und Versand</h1><hr class='mt-5 mb-5'/><p>Es gelten folgende Bedingungen:<br><br><strong>Versandbedingungen</strong> <br><br>Die Lieferung erfolgt im Inland (Deutschland)&nbsp; und in die nachstehenden Länder: Belgien, Dänemark, Frankreich, Luxemburg, Monaco, Niederlande, Österreich, Polen, Tschechische Republik .<br><br><strong>Versandkosten </strong> (inklusive gesetzliche Mehrwertsteuer)<br><br><strong>Lieferungen im Inland (Deutschland):&nbsp; </strong><br><br>Wir berechnen keine Versandkosten.<br><br><strong>Lieferungen ins Ausland : </strong><br><br>Belgien: 14,90 Euro<br>Dänemark: 14,90 Euro<br>Frankreich: 14,90 Euro<br>Luxemburg: 14,90 Euro<br>Monaco: 14,90 Euro<br>Niederlande: 14,90 Euro<br>Österreich: 14,90 Euro<br>Polen: 14,90 Euro<br>Tschechische Republik: 14,90 Euro <br><br><strong>Lieferfristen</strong> <br><br>Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der Ware im Inland (Deutschland) innerhalb von 3 - 5 Tagen, bei Auslandslieferungen innerhalb von 5 - 7 Tagen nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Ihrer Zahlungsanweisung).&nbsp; Beachten Sie, dass an Sonn- und Feiertagen keine Zustellung erfolgt.&nbsp; Haben Sie Artikel mit unterschiedlichen Lieferzeiten bestellt, versenden wir die Ware in einer gemeinsamen Sendung, sofern wir keine abweichenden Vereinbarungen mit Ihnen getroffen haben. Die Lieferzeit bestimmt sich in diesem Fall nach dem Artikel mit der längsten Lieferzeit den Sie bestellt haben.<br><br><strong>Akzeptierte Zahlungsmöglichkeiten </strong><br><br><strong>-&nbsp;</strong>Vorkasse per Überweisung <br><strong>-</strong>&nbsp;Zahlung per PayPal Express <br>-&nbsp;Zahlung per PayPal (Kreditkarte, Lastschrift, ggf. Rechnung)<br><br>Bei Fragen finden Sie unsere Kontaktdaten im Impressum.<br></p>";

</script>
