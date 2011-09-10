/**
 * Functions used in server plugins pages
 */

var pma_theme_image; // filled in server_plugins.php

$(function() {
    // Add tabs
    $('#pluginsTabs').tabs({
        // Tab persistence
        cookie: { name: 'pma_serverStatusTabs', expires: 1 },
        show: function(event, ui) {
            // Fixes line break in the menu bar when the page overflows and scrollbar appears
            menuResize();
            // 'Plugins' tab is too high due to hiding of 'Modules' by negative left position,
            // hide tabs by changing display to fix it
            $(ui.panel).closest('.ui-tabs').find('> div').not(ui.panel).css('display', 'none');
            $(ui.panel).css('display', 'block');
        }
    });

    // Make columns sortable, but only for tables with more than 1 data row
    var $tables = $('#plugins_plugins table:has(tbody tr + tr)');
    $tables.tablesorter({
        sortList: [[0,0]],
        widgets: ['zebra']
    });
    $tables.find('thead th')
        .append('<img class="sortableIcon" src="' + pma_theme_image + 'cleardot.gif" alt="">');
});