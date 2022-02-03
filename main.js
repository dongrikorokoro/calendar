  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      initialDate: '2022-02-01',
      navLinks: true, 
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('タイトル:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
          localStorage.setItem('events',events)
        }
        calendar.unselect()
      },
      eventClick: function(arg) {
        if (confirm('本当に削除してもいいですか？')) {
          arg.event.remove()
        }
      },
      editable: true,
      dayMaxEvents: true, 
      events: []
    });
    events = localStorage.getItem('events')
    events = JSON.parse(events)
    calendar.render();
  });
