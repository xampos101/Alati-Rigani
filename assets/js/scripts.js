document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('greek-flag').addEventListener('click', function() {
        document.getElementById('menu-title').innerText = 'Μενού';
        document.getElementById('menu-subtitle').innerText = 'Αλάτι & Ρίγανη';
        document.getElementById('Salads-title').innerText = 'Σαλάτες';
        document.getElementById('appetizers-title').innerText = 'Ορεκτικά';
        document.getElementById('mainM-dishes-title').innerText = 'Κρεατικά Κυρίως Πιάτα';
        document.getElementById('mainS-dishes-title').innerText = 'Θαλασσινά Κυρίως Πιάτα';
        document.getElementById('dips-title').innerText = 'Αλοιφές';
        document.getElementById('Sea-App-title').innerText = 'Θαλασσινά Ορεκτικά';
        document.getElementById('Things').innerText = 'Διάφορα';
        document.getElementById('Spagg').innerText = 'Ζυμαρικά';




        
        document.getElementById('dish1-title').innerText = 'Ψητή ντομάτα ';
        document.getElementById('dish2-title').innerText = 'Κολοκυθάκι τηγανιτό με τζατζίκι';
        document.getElementById('dish3-title').innerText = 'Φέτα με σουσάμι, μέλι και τρούφα';
        document.getElementById('dish4-title').innerText = 'Φέτα με ελαιόλαδο και ρίγανη ';
        document.getElementById('dish5-title').innerText = 'Φέτα ψητή με πιπεριά και ντομάτα';
        document.getElementById('dish6-title').innerText = 'Χαλούμι ψητό με τσάτνεϊ ντομάτας';
        document.getElementById('dish7-title').innerText = 'Κεφαλοτύρι σαγανάκι (ψητό ή τηγανητό)';
        document.getElementById('dish8-title').innerText = 'Πατάτες τηγανιτές';
        document.getElementById('dish9-title').innerText = 'Σαρμαδάκια';
        document.getElementById('dish10-title').innerText = 'Καυτερή πιπεριά';
        document.getElementById('dish11-title').innerText = 'Ψητή μελιτζάνα';
        document.getElementById('dish12-title').innerText = 'Χειροποίητο τζατζίκι';
        document.getElementById('dish13-title').innerText = 'Τυροσαλάτα';
        document.getElementById('dish14-title').innerText = 'Ταραμάς';
        //thalassinaO
        document.getElementById('dish15-title').innerText = 'Χταπόδι βραστό/ψητό';
        document.getElementById('dish16-title').innerText = 'Καβουροσαλάτα';
        document.getElementById('dish17-title').innerText = 'Μύδια αχνιστά';
        document.getElementById('dish18-title').innerText = 'Μύδια σαγανάκι ';
        document.getElementById('dish19-title').innerText = 'Καπνιστό σκουμπρί στη σχάρα';
        document.getElementById('dish20-title').innerText = 'Γαρίδες σαγανάκι';
        document.getElementById('dish21-title').innerText = 'Ποικιλία αλμυρών';
        //Salates
        document.getElementById('dish22-title').innerText = 'Αλάτι και Ρίγανη';
        document.getElementById('dish23-title').innerText = 'Χωριάτικη σαλάτα';
        document.getElementById('dish24-title').innerText = 'Σαλάτα Καίσαρα';
        document.getElementById('dish25-title').innerText = 'Σαλάτα με γαρίδες';
        document.getElementById('dish26-title').innerText = 'Αγγουροντομάτα';
        document.getElementById('dish27-title').innerText = 'Σαλάτα παντζάρι';
        document.getElementById('dish28-title').innerText = 'Ταμπουλέ';

        //Kreatika
        document.getElementById('dish29-title').innerText = 'Γύρος Χοιρινός ';
        document.getElementById('dish49-title').innerText = 'Χοιρινή Σπαλομπριζόλα';
        document.getElementById('dish30-title').innerText = 'Μπιφτέκι μοσχαρίσιο με ταμπουλέ';
        document.getElementById('dish31-title').innerText = 'Χοιρινό σουβλάκι ';
        document.getElementById('dish32-title').innerText = 'Κοτόπουλο σουβλάκι';
        document.getElementById('dish33-title').innerText = 'Μοσχαρίσια σπαλομπριζόλα';
        document.getElementById('dish34-title').innerText = 'Premium Burger';
        document.getElementById('dish35-title').innerText = 'Σουτζουκάκια';

        document.getElementById('dish36-title').innerText = 'Ψητή τσιπούρα';
        document.getElementById('dish37-title').innerText = 'Ψητό λαβράκι';
        document.getElementById('dish38-title').innerText = 'Τηγανητό καλαμάρι';
        document.getElementById('dish39-title').innerText = 'Ψητό καλαμάρι ';
        document.getElementById('dish40-title').innerText = 'Τηγανητός γαύρος με σως αγιολί';
        document.getElementById('dish41-title').innerText = 'Γεμιστό καλαμάρι';
        document.getElementById('dish42-title').innerText = 'Ψητές σαρδέλες';
        document.getElementById('dish43-title').innerText = 'Ψητές γαρίδες';
        document.getElementById('dish44-title').innerText = 'Σολομός μερίδα';

        document.getElementById('dish45-title').innerText = 'Λιγκουίνι με σολομό';
        document.getElementById('dish46-title').innerText = 'Γαριδομακαρονάδα';

        document.getElementById('dish47-title').innerText = 'Μερίδα ψωμί 1-2 φέτες';
        document.getElementById('dish48-title').innerText = 'Μερίδα ελαιόλαδο και ξύδι';





        // Repeat for each dish
    });

    document.getElementById('english-flag').addEventListener('click', function() {
        document.getElementById('menu-title').innerText = 'Menu';
        document.getElementById('menu-subtitle').innerText = 'Salt & Oregano';
        document.getElementById('Salads-title').innerText = 'Salads';
        document.getElementById('appetizers-title').innerText = 'Appetizers';
        document.getElementById('mainM-dishes-title').innerText = 'Meat Mainly Dishes';
        document.getElementById('mainS-dishes-title').innerText = 'Seafood Mainly Dishes ';
        document.getElementById('dips-title').innerText = 'Ointments    ';
        document.getElementById('Sea-App-title').innerText = 'Seafood Appetizers';
        document.getElementById('Spagg').innerText = 'Pasta';
        document.getElementById('Things').innerText = 'Various';
        
        document.getElementById('dish1-title').innerText = 'Roasted tomato ';
        document.getElementById('dish2-title').innerText = 'Zucchini fried with tzatziki';
        document.getElementById('dish3-title').innerText = 'Feta cheese with sesame, honey and truffle';
        document.getElementById('dish4-title').innerText = 'Feta with olive oil and oregano ';
        document.getElementById('dish5-title').innerText = 'Baked feta with pepper and tomato';
        document.getElementById('dish6-title').innerText = 'Grilled halloumi with tomato chutney';
        document.getElementById('dish7-title').innerText = 'Fried or fried cheese';
        document.getElementById('dish8-title').innerText = 'French fries';
        document.getElementById('dish9-title').innerText = 'Chips';
        document.getElementById('dish10-title').innerText = 'Hot peppers';
        document.getElementById('dish11-title').innerText = 'Roasted eggplant';
        document.getElementById('dish12-title').innerText = 'Handmade tzatziki';
        document.getElementById('dish13-title').innerText = 'Cheese salad';
        document.getElementById('dish14-title').innerText = 'Taramasic salad';

        document.getElementById('dish15-title').innerText = 'Boiled/roasted octopus';
        document.getElementById('dish16-title').innerText = 'Crab salad';
        document.getElementById('dish17-title').innerText = 'Steamed mussels';
        document.getElementById('dish18-title').innerText = 'Fried mussels ';
        document.getElementById('dish19-title').innerText = 'Grilled smoked mackerel';
        document.getElementById('dish20-title').innerText = 'Fried prawns';
        document.getElementById('dish21-title').innerText = 'Assorted savoury';

        document.getElementById('dish22-title').innerText = 'Salt and Oregano Salad';
        document.getElementById('dish23-title').innerText = 'Greek salad';
        document.getElementById('dish24-title').innerText = 'Caesar salad';
        document.getElementById('dish25-title').innerText = 'Shrimp salad';
        document.getElementById('dish26-title').innerText = 'Cucumber Tomato Salad';
        document.getElementById('dish27-title').innerText = 'Beetroot salad';
        document.getElementById('dish28-title').innerText = 'Taboule';
        
        document.getElementById('dish29-title').innerText = 'Pork Gyros ';
        document.getElementById('dish49-title').innerText = 'Pork pancetta steak ';
        document.getElementById('dish30-title').innerText = 'Beef burger with tabbouleh';
        document.getElementById('dish31-title').innerText = 'Pork souvlaki ';
        document.getElementById('dish32-title').innerText = 'Chicken souvlaki ';
        document.getElementById('dish33-title').innerText = 'Beef Steak';
        document.getElementById('dish34-title').innerText = 'Premium Burger';
        document.getElementById('dish35-title').innerText = 'Souzoukakia ';

        document.getElementById('dish36-title').innerText = 'Roast sea bream';
        document.getElementById('dish37-title').innerText = 'Grilled sea bass';
        document.getElementById('dish38-title').innerText = 'Fried squid';
        document.getElementById('dish39-title').innerText = 'Baked squid ';
        document.getElementById('dish40-title').innerText = 'Fried anchovy with honeydew sauce';
        document.getElementById('dish41-title').innerText = 'Stuffed squid';
        document.getElementById('dish42-title').innerText = 'Grilled sardines';
        document.getElementById('dish43-title').innerText = 'Grilled shrimps';
        document.getElementById('dish44-title').innerText = 'Salmon portion';

        document.getElementById('dish45-title').innerText = 'Linguine with salmon';
        document.getElementById('dish46-title').innerText = 'Shrimp Pasta';

        document.getElementById('dish47-title').innerText = 'Portion of bread 1/2 slices ';
        document.getElementById('dish48-title').innerText = 'Portion of olive oil and vinegar ';

        





        

        // Repeat for each dish
    });
    document.getElementById('bulgarian-flag').addEventListener('click', function() {
        document.getElementById('menu-title').innerText = 'Меню';
        document.getElementById('menu-subtitle').innerText = 'Сол и риган';
        document.getElementById('Salads-title').innerText = 'САЛАТИ';
        document.getElementById('appetizers-title').innerText = 'ПРЕДЯСТИЯ';
        document.getElementById('mainM-dishes-title').innerText = 'ОСНОВНИ ЯСТИЯ С МЕСО';
        document.getElementById('mainS-dishes-title').innerText = 'ОСНОВНИ ЯСТИЯ С РИБА И МОРСКИ ДАРОВЕ ';
        document.getElementById('dips-title').innerText = 'МЛЕЧНИ САЛАТИ    ';
        document.getElementById('Sea-App-title').innerText = 'ПРЕДЯСТИЯ ОТ МОРСКИ ДАРОВЕ';
        document.getElementById('Spagg').innerText = 'ПАСТА';
        document.getElementById('Things').innerText = 'ДРУГИ';
        

        document.getElementById('dish1-title').innerText = 'Печен домат';
        document.getElementById('dish2-title').innerText = 'Пържени тиквички с цаца';
        document.getElementById('dish3-title').innerText = 'Сирене Фета със сусам, мед и трюфел';
        document.getElementById('dish4-title').innerText = 'Фета със зехтин и риган';
        document.getElementById('dish5-title').innerText = 'Запечена фета с чушка и домат';
        document.getElementById('dish6-title').innerText = 'Халуми на скара с доматено лютеница';
        document.getElementById('dish7-title').innerText = 'Пържено или пържено сирене';
        document.getElementById('dish8-title').innerText = "Пържени картофи";
        document.getElementById('dish9-title').innerText = "Чипс";
        document.getElementById('dish10-title').innerText = "Люти чушки";
        document.getElementById('dish11-title').innerText = 'Печен патладжан';
        document.getElementById('dish12-title').innerText = 'Дзадзики';
        document.getElementById('dish13-title').innerText = "Сирене салата ";
        document.getElementById('dish14-title').innerText = 'Бял тарама хайвер ';

        document.getElementById('dish15-title').innerText = "Варен/печен октопод";
        document.getElementById('dish16-title').innerText = "Салата от раци";
        document.getElementById('dish17-title').innerText = "Миди на пара";
        document.getElementById('dish18-title').innerText = "Пържени миди";
        document.getElementById('dish19-title').innerText = "Пушена скумрия на скара";
        document.getElementById('dish20-title').innerText = 'Пържени скариди';
        document.getElementById('dish21-title').innerText = "Разнообразни соленки";

        document.getElementById('dish22-title').innerText = 'Сол и риган';
        document.getElementById('dish23-title').innerText = "Гръцка салата ";
        document.getElementById('dish24-title').innerText = 'Цезар салата';
        document.getElementById('dish25-title').innerText = "Салата със скариди";
        document.getElementById('dish26-title').innerText = "Салата от домати и краставици ";
        document.getElementById('dish27-title').innerText = "Салата от цвекло";
        document.getElementById('dish28-title').innerText = "Табуле";

        document.getElementById('dish29-title').innerText = 'Свински гирос ';
        document.getElementById('dish49-title').innerText = 'Свинска пържола с ароматно масло и солен цвят';
        document.getElementById('dish30-title').innerText = 'Телешко кюфте с табуле ';
        document.getElementById('dish31-title').innerText = 'Свински шиш с пита от Лимнос, табуле и сос водка ';
        document.getElementById('dish32-title').innerText = 'Пилешки шиш с пита от Лимнос, табуле и сос водка ';
        document.getElementById('dish33-title').innerText = 'Телешка пържола с ароматно масло и едра сол';
        document.getElementById('dish34-title').innerText = 'Бургер Premium';
        document.getElementById('dish35-title').innerText = 'Кебапчета с пита от Лимнос и табуле ';

        document.getElementById('dish36-title').innerText = 'Печена ципура ';
        document.getElementById('dish37-title').innerText = 'Печено лавраки ';
        document.getElementById('dish38-title').innerText = 'Пържен калмар с тартар от кисели краставички ';
        document.getElementById('dish39-title').innerText = 'Печен калмар';
        document.getElementById('dish40-title').innerText = 'Пържена хамсия с айоли сос';
        document.getElementById('dish41-title').innerText = 'Пълнен калмар ';
        document.getElementById('dish42-title').innerText = 'Печени сардини';
        document.getElementById('dish43-title').innerText = 'Печени скариди ';
        document.getElementById('dish44-title').innerText = 'Порция сьомга ';

        document.getElementById('dish45-title').innerText = 'Лингуини със сьомга';
        document.getElementById('dish46-title').innerText = 'Скаридена паста';

        document.getElementById('dish47-title').innerText = 'Порция хляб  ';
        document.getElementById('dish48-title').innerText = 'Порция със зехтин и оцет  ';




        // Repeat for each dish
    });
});
