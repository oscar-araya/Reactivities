using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Collections.Generic;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                try
                {
                    cancellationToken.ThrowIfCancellationRequested();
                }
                catch (Exception ex) when (ex is TaskCanceledException)
                {
                    // task cancelled
                }
                return await _context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}